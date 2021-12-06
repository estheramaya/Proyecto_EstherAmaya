import React, { useState, useRef } from 'react'
import { Contenedor, Input, Button } from './estilos'

const Buscador = () => {
    const reference = useRef(null)
    const [buscar, Guardar] = useState('')

    const handleChange = () => { 
        Guardar(reference.current.value)
    }

    const haledClick = () => {
        console.log(reference.current.value)
        Guardar('')
    }

    return (
        <Contenedor>
            <Input type='text' name='buscar' value={buscar} onChange={handleChange} ref={reference} />
            <Button onClick={haledClick}>Buscar</Button>
        </Contenedor>
    )
}

export default Buscador
