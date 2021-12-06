import styled, { css } from 'styled-components'

export const Contenedor = styled.article`
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    margin-bottom: 35px;
    padding: 20px;
    text-align: center;
    width: 450px;
`
export const Img = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 250px;
    
    ${props => css`
        background-image: url(${props.imagen})
    `}
`
export const Producto = styled.h4`
    font-size: 22pt;
    margin-bottom: 0
`
export const Precio = styled.p`
    color: #4c4c4c;
    font-size: 18pt;
    margin-top: 4px;
`