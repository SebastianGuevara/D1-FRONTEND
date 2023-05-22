import React from "react";
import { SaleContainer } from "../common/Containers";

const Sale = (props) => {
    return(
        <SaleContainer>
            <span>{`ID de producto: ${props.id}`}</span>
            <span>{`Documento del cliente: ${props.documentClient}`}</span>
            <span>{`Cantidad comprada: ${props.totalAmount}`}</span>
            <span>{`Fecha de compra: ${props.dateCreated}`}</span>
        </SaleContainer>
    )
}

export default Sale;