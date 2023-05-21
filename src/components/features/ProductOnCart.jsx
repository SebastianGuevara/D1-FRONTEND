import React from "react";
import { AddDeleteContainer, ProductOnCartContainer, ProductOnCartTextContainer } from "../common/Containers";
import { ProductOnCartImage } from "../common/Images";
import { PriceText, ProductOnCartDescriptionText } from "../common/Text";
import AddDelete from "./AddDelete";


const ProductOnCart = () => {
    return(
        <ProductOnCartContainer>
            <ProductOnCartImage src='/images/test.webp'/>
            <ProductOnCartTextContainer>
                <ProductOnCartDescriptionText>COCA-COLA</ProductOnCartDescriptionText>
                <PriceText>$ 3.990</PriceText>
            </ProductOnCartTextContainer>
            <AddDelete width={'40%'}/>
        </ProductOnCartContainer>
    )
}

export default ProductOnCart;