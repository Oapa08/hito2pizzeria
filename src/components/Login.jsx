// Hito_2
import './Register_Login.css'
import Swal from 'sweetalert2'
import { useState } from 'react'

const Login = () => {
// Primero declaramos todos los componentes de nuestro formulario
  const [login, setLogin] = useState({
    email: '',
    clave: ''
  })
  const [mostrarClave, setMostrarClave] = useState(false)
  // Controlamos los eventos de cambio
  const handleCambio = (evento) => {
    setLogin({ ...login, [evento.target.name]: evento.target.value })
  }

  // Controlamos que no haya carga antes de escribir los datos

  const handleCarga = async (evento) => {
    evento.preventDefault()

    // Ahora destructuramos los datos para las validaciones
    const { email, clave } = login
    // Condiciones
    if (!email.trim() || !clave.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos deben ser completados!'
      })
      return
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        text: 'Ingrese un mail válido'
      })
      setLogin({ email: '', clave: '' })
      return
    }

    if (clave.length < 6 || clave.length > 14) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La clave deben contener entre 6 y 14 carateres'
      })
      setLogin({ clave: '' })
      return
    }

    Swal.fire({
      title: 'Login éxitoso!',
      icon: 'success',
      draggable: true
    })
    setLogin({ email: '', clave: '' })
  }

  return (
    <>
      <form className='formulario' onSubmit={handleCarga}>
        <div className='container_inputs'>
          <div className='box_input'>
            <label>Email</label>
            <input
              type='text'
              name='email'
              value={login.email}
              onChange={handleCambio}
              required
            />
          </div>
          <div className='box_input'>
            <label>Contraseña</label>
            <div>
              <input
                type={mostrarClave ? 'text' : 'password'}
                name='clave'
                value={login.clave}
                onChange={handleCambio}
              />
              <button type='button' onClick={() => setMostrarClave(!mostrarClave)} className='toggle-password'> {mostrarClave ? '👀' : '🫣'} </button>
            </div>
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>Logearse</button>
      </form>
    </>
  )
}

export default Login
