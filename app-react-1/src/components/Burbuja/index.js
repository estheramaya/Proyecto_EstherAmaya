import {Span} from './estilos'

export const Burbuja = ({ cantidad }) => {
    return (
        <Span >
            {cantidad > 9 ? '9+' : cantidad}
        </Span>
    )   
}