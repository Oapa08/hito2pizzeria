import Totales from './utilities/compra'
import './Cards.css'

const CardPizza = ({ img, name, price, ingredients }) => {
  return (
    <>
      <div className='contenedor'>
        <img className='foto' src={img} alt={name} />
        <div className='name_pizza'>
          <h5>Pizza {name}</h5>
        </div>
        <hr />
        <div className='box_ingredientes'>
          <p className='text-muted tex_sub_ing'> Ingredientes: </p>
          <p className='text_ingredientes'> 🍕{ingredients.join(', ')} </p>
        </div>
        <hr />
        <div className='box_precio'>
          <h6>PRECIO: ${Totales(price)}</h6>
        </div>

        <div className='box'>
          <div className='box1'>
            <button type='button' className='boton1'>Ver Más 👀</button>
          </div>
          <div className='box2'>
            <button type='button' className='boton2'>Añadir 🛒</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardPizza
