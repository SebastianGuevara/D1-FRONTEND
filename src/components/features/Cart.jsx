import React from 'react'
import { CartContainer, CartInformationContainer, MiniInformationContainer, ProductsOnCartContainer } from '../common/Containers'
import { PriceText, ProductDescriptionText } from '../common/Text';
import { DirectionInput } from '../common/Inputs';
import { Icon } from '@iconify/react';
import { CloseButton } from '../common/Buttons';
import ProductOnCart from './ProductOnCart';
import { useSelector } from 'react-redux';
const Cart = (props) =>
{
    const cart = useSelector((state)=>state.cart);
    return(
        <CartContainer width = {props.width}>
            <CartInformationContainer>
                <h2 style={{margin:"0"}}>Carrito de compras</h2>
                <MiniInformationContainer>
                    <Icon icon="mingcute:truck-line" color="#db071e" width="19px" />
                    <PriceText>Enviar a:</PriceText>
                    <DirectionInput placeholder='Ingrese su dirección'/>
                    <CloseButton onClick={()=>props.close(0)}>Cerrar X</CloseButton>
                </MiniInformationContainer>
                <MiniInformationContainer>
                    <Icon icon="iconoir:shop" color="#db071e" width="17" />
                    <PriceText>Aramado en:</PriceText>
                    <ProductDescriptionText>Chía Tienda Domicilios</ProductDescriptionText>
                </MiniInformationContainer> 
            </CartInformationContainer> 
            <ProductsOnCartContainer>
                {cart.products.map(product=>(
                        <ProductOnCart key={product.id} name={product.name} price={product.value} id={product.id}/>
                ))}
            </ProductsOnCartContainer>       
        </CartContainer>
    )
}

export default Cart;