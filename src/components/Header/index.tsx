import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Container, Cart } from './style'
import { useContext } from 'react'
import { CoffeContext } from '../../Context/Coffe'

export function Header() {
  const { cart } = useContext(CoffeContext)
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Cart>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Fortaleza, CE</span>
        </div>
        <Link to="/checkout" aria-disabled={cart.length === 0}>
          <ShoppingCart
            size={22}
            weight="fill"
            aria-disabled={cart.length === 0}
          />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </Cart>
    </Container>
  )
}
