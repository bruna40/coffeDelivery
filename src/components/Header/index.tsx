import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Container, Cart } from './style'

export function Header() {
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
        <Link to="/checkout">
          <ShoppingCart size={22} weight="fill" />
        </Link>
      </Cart>
    </Container>
  )
}
