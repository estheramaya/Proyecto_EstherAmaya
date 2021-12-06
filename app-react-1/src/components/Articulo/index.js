import { Button } from '../Button'
import { Contenedor, Img, Producto, Precio } from './estilos'

export const Articulo = ({prod}) => {
    return (
        <Contenedor nombre={prod.nombre}>
            <Img imagen={prod.imagen} />
            <Producto>{prod.nombre}</Producto>
            <Precio>${prod.precio.toLocaleString()}</Precio>
            <Button prod={prod}>Agregar al Carrito</Button>
        </Contenedor>
    )
}