import { useState } from 'react'
import Totales from './utilities/compra'

const Navbar = () => {
  const total = 25000
  const token = false
  const [Logeo, setLogeo] = useState (token)

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark text-white d-flex justify-content-between'>
      {/* Siempre Visible */}
      <a className='navbar-brand' href='#'>Pizzeria Mamma Mía!</a>
      <ul className='navbar-nav d-flex mr-auto mt-2 mt-lg-0 text1_nav d-flex gap-2'>
        <li className='nav-item active'>
          <button type='button' className='btn btn-dark border'>🍕 Home</button>
        </li>
        {/* Condicionados */}
        {Logeo && (
          <>
            <li className='nav-item'>
              <button type='button' className='btn btn-dark border'>🔓 Profile</button>
            </li>
            <li className='nav-item'>
              <button type='button' className='btn btn-dark border'>🔒 Logout</button>
            </li>
          </>
        )}
        {!Logeo && (
          <>
            <li className='nav-item'>
              <button type='button' className='btn btn-dark border'>🔐 Login</button>
            </li>
            <li className='nav-item'>
              <button type='button' className='btn btn-dark border'>🔐 Register</button>
            </li>
          </>
        )}
      </ul>
      <form className='form-inline my-2 my-lg-0 my-2 my-sm-0 d-flex ml-auto border border-2 border-success p-1 rounded'>
        <span className=''> 🛒 Total: $ {Totales(total)} </span>
      </form>
    </nav>
  )
}
export default Navbar
