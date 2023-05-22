import React, { useState } from "react";
import { ProductOnCartContainer, ProductOnCartTextContainer } from "../common/Containers";
import { ProductOnCartImage } from "../common/Images";
import { PriceText, ProductOnCartDescriptionText } from "../common/Text";
import AddDelete from "./AddDelete";

const ProductOnCart = (props) => {
    const [url, setUrl] = useState(true)

    const handleImageError = () =>{
        setUrl(false);
    }

    return(
        <ProductOnCartContainer>
            {url?<ProductOnCartImage src={`https://d1images.s3.amazonaws.com/${props.id}.webp`} alt="Product image" onError={handleImageError}/>:
            <ProductOnCartImage src='images/no-photo.png' alt="Default product image"/>}
            <ProductOnCartTextContainer>
                <ProductOnCartDescriptionText>{props.name}</ProductOnCartDescriptionText>
                <PriceText>{'$ '+props.price}</PriceText>
            </ProductOnCartTextContainer>
            <AddDelete width={'40%'} id={props.id}/>
        </ProductOnCartContainer>
    )
}

export default ProductOnCart;