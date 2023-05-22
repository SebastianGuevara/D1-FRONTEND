import React, { useEffect, useState } from 'react';
import { PagesContainer, ProductsBannerContainer, ProductsContainer, SliderContainer } from '../components/common/Containers';
import ProductBanner from '../components/features/ProductBanner';
import { getProducts } from '../services/ShopApi';
import { SliderImages } from '../components/common/Images';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from '@iconify/react';
import { AddDeleteButton } from '../components/common/Buttons';

const ProductsPage = () => {
    const [products, setProducts] = useState(null);
    useEffect(()=>{
        getProducts().then(response=>{
            setProducts(response.data);
        })
    },[])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
    return(
        <PagesContainer>
            <SliderContainer {...settings}>
                <div>
                    <SliderImages src='/images/1.jpg'/>
                </div>
                <div>
                    <SliderImages src='/images/2.jpg'/>
                </div>
                <div>
                    <SliderImages src='/images/3.jpg'/>
                </div>
                <div>
                    <SliderImages src='/images/4.jpg'/>
                </div>
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