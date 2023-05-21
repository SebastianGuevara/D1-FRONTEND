import React, { useState, useEffect } from 'react'
import { CartContainer, CartInformationContainer, MiniInformationContainer, PaymentContainer, ProductsOnCartContainer } from '../common/Containers'
import { PriceText, ProductDescriptionText } from '../common/Text';
import { DirectionInput } from '../common/Inputs';
import { Icon } from '@iconify/react';
import { CloseButton, EmptyCartButton, PaymentButton } from '../common/Buttons';
import ProductOnCart from './ProductOnCart';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../../redux/slices/cartSlice';
import { sellProducts } from '../../services/ShopApi';

const Cart = (props) =>
{
    const [isCartEmpty, setIsCartEmpty] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);
    const cart = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(cart.products){
            (0!==cart.products.length)?setIsCartEmpty(true):setIsCartEmpty(false);
            setTotalPrice(calculateTotalPrice());
        }
    },[cart.products])
    const calculateTotalPrice = () =>{
        let totalPrice = 0;
        if(cart.products){
            cart.products.forEach(product=>{
                totalPrice = totalPrice + (product.quantity*product.value);
            })
        }
        return totalPrice;
    }
    const handleSellProducts = () =>{
        setIsCartEmpty(false);
        sellProducts(cart.products).then(response => {
            alert(response.data)
            dispatch(emptyCart());
        })
        .catch(e =>{
            alert(e.response.data);
            setIsCartEmpty(true);
        });
    }
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
                {isCartEmpty?<EmptyCartButton onClick={()=>dispatch(emptyCart())}>
                    <Icon icon="lucide:trash" color="#EC5B6C" width="26" />
                    <span>Vaciar carrito</span>     
                </EmptyCartButton>:null}
            </ProductsOnCartContainer>  
            <PaymentContainer onClick={()=>handleSellProducts()}>
                <ProductDescriptionText style={{position:'absolute', top:'40%', left: '8%'}}>{'Subtotal: $ '+totalPrice}</ProductDescriptionText>
                <PaymentButton disabled={!isCartEmpty}> Pagar </PaymentButton>
            </PaymentContainer>     
        </CartContainer>
    )
}

export default Cart;