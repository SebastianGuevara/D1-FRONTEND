import React from "react";
import { SaleContainer } from "../common/Containers";

const Sale = (props) => {
    return(
        <SaleContainer>
            {props.id&&<span>{`ID de producto: ${props.id}`}</span>}
            {props.documentClient&&<span>{`Documento del cliente: ${props.documentClient}`}</span>}
            <span>{`Cantidad comprada: ${props.totalAmount}`}</span>
            <span>{`Fecha de compra: ${props.dateCreated}`}</span>
            <span>{`Lugar de compra: ${props.address}`}</span>
        </SaleContainer>
    )
}

export default Sale;