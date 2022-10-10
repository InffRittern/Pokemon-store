import { Navbar as NavbarBs, Container, Nav, Button} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Footer(){
    const { openCart, cartQuantity } = useShoppingCart();
    return (
    <NavbarBs className="bg-dark shadow-sm mb-3">
        <Container>
            <p className="text-white">*Предупреждение, это не реальный магазин! Это учебный проек. У меня нет никаких прав на франшизу Pokemon, все права переходят к <a href="https://www.nintendo.com/">Nintendo</a> <a href="https://www.pokemon.com/us//">Pokemon</a></p>
        </Container>
    </NavbarBs>
    )
}