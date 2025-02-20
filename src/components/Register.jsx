// Hito_2
import './Register_Login.css'
import Swal from 'sweetalert2'
import { useState } from 'react'



const RegisterPage = () => {
// Primero declaramos todos los componentes de nuestro formulario
  const [registro, setRegistro] = useState({
    email: '',
    clave: '',
    confirmar: ''
  })
  const [mostrarClave, setMostrarClave] = useState(false)
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false)
  // Controlamos los eventos de cambio
  const handleCambio = (evento) => {
    setRegistro({ ...registro, [evento.target.name]: evento.target.value })
  }

  // Controlamos que no haya carga antes de escribir los datos

  const handleCarga = async (evento) => {
    evento.preventDefault()

    // Ahora destructuramos los datos para las validaciones
    const { email, clave, confirmar } = registro
    // Condiciones
    if (!email.trim() || !clave.trim() || !confirmar.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos deben ser completados!'
      })
      setRegistro({ email: '', clave: '', confirmar: '' })
      return
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        text: 'Ingrese un mail válido'
      })
      setRegistro({ email: '', clave: '', confirmar: '' })
      return
    }

    if (clave.length < 6 || clave.length > 14) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La clave deben contener entre 6 y 14 carateres'
      })
      setRegistro({ email: '', clave: '', confirmar: '' })
      return
    }

    if (clave !== confirmar) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las claves deben ser iguales'
      })
      setRegistro({ email: '', clave: '', confirmar: '' })
      return
    }
    Swal.fire({
      title: 'Registro éxitoso!',
      icon: 'success',
      draggable: true
    })
    setRegistro({ email: '', clave: '', confirmar: '' })
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
              value={registro.email}
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
                value={registro.clave}
                onChange={handleCambio}
              />
              <button type='button' onClick={() => setMostrarClave(!mostrarClave)} className='toggle-password'> {mostrarClave ? '👀' : '🫣'} </button>
            </div>
          </div>
          <div className='box_input'>
            <label>Confirmar Contraseña</label>
            <div>
              <input
                type={mostrarConfirmar ? 'text' : 'password'}
                name='confirmar'
                value={registro.confirmar}
                onChange={handleCambio}
              />
              <button type='button' onClick={() => setMostrarConfirmar(!mostrarConfirmar)} className='toggle-password'> {mostrarConfirmar ? '👀' : '🫣'} </button>
            </div>
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>Enviar</button>
      </form>
    </>
  )
}

export default RegisterPage
