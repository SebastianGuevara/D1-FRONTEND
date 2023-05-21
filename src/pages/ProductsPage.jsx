import React, { useEffect, useState } from 'react';
import { PagesContainer, ProductsBannerContainer, ProductsContainer, SliderContainer } from '../components/common/Containers';
import ProductBanner from '../components/features/ProductBanner';
import { getProducts } from '../services/ShopApi';

const ProductsPage = () => {
    const [products, setProducts] = useState(null);
    useEffect(()=>{
        getProducts().then(response=>{
            setProducts(response.data);
        })
    },[])
    return(
        <PagesContainer>
            <SliderContainer>

            </SliderContainer>
            <ProductsContainer>
                <h2>Productos</h2>
                <ProductsBannerContainer>
                    {products&&products.map(product=>(
                        <ProductBanner key={product.id} name={product.name} price={product.value} id={product.id} quantity={product.quantity}/>
                    ))}

                </ProductsBannerContainer>
            </ProductsContainer>
        </PagesContainer>
    )
}

export default ProductsPage