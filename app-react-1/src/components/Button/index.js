import { useContext } from 'react'
import { BUTTON } from './estilos'
import AppContext from "../../context/AppContext";
export const Button = ({children, prod}) => {

    const { agregarAlCarro } = useContext(AppContext)
    const clickAgregar = (prod) =>{
        agregarAlCarro(prod)
    }
    return (
        <BUTTON onClick={() => clickAgregar(prod)}>{children}</BUTTON>
    )
}
