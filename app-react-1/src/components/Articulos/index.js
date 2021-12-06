import { useContext } from 'react'
import { Articulo } from "../Articulo";
import { Contenedor } from './estilos';
import AppContext from "../../context/AppContext";

export const Articulos = () => {
    const { articulos } = useContext(AppContext)
    return (
        <Contenedor>
            {
                articulos.map (
                    prod => <Articulo key={prod.id} prod={prod} />
                )
            }
        </Contenedor>
    )
}