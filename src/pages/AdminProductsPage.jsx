import React, { useRef } from "react";
import { AdminContainer, PagesContainer } from "../components/common/Containers";
import { FormsInput } from "../components/common/Inputs";
import { DefaultButton } from "../components/common/Buttons";
import { addProduct, addStockToProduct } from "../services/ShopApi";


const AdminProductsPage = () => {
    const idRef = useRef(null);
    const nameRef = useRef(null);
    const quantityRef = useRef(null);
    const priceRef = useRef(null);

    const id1Ref = useRef(null);
    const newQuantityRef = useRef(null);

    const handleAddProductToStock = () =>{
        if(''!==idRef.current.value&&''!==nameRef.current.value&&''!==quantityRef.current.value&&''!==priceRef.current.value){
            const newProduct = {
                id: parseInt(idRef.current.value),
                name: nameRef.current.value,
                quantity: parseInt(quantityRef.current.value),
                value: parseInt(priceRef.current.value)
            }
            

            addProduct(newProduct).then(r=>{
                alert("PRODUCTO AGREGADO CORRECTAMENTE");
                idRef.current.value = '';
                nameRef.current.value = '';
                quantityRef.current.value = '';
                priceRef.current.value = '';
            })
            .catch(e => alert(e.response.data));
        }
        else{
            alert("EL PRODUCTO NO SE PUDO AGREGAR DEBIDO A QUE HACE FALTA ALGÚN ESPACIO POR RELLENAR");
        }
    }

    const handleAddStockToProduc = () => {
        if(''!==id1Ref.current.value&&''!==newQuantityRef.current.value){
            const quantity = {
                id: id1Ref.current.value,
                quantity: newQuantityRef.current.value
            }

            addStockToProduct(quantity).then(r=>{
                alert(`EL PRODUCTO: ${r.data.name} SE LE AGREGARON ${newQuantityRef.current.value} UNIDADES CORRECTAMENTE.`)
                id1Ref.current.value = '';
                newQuantityRef.current.value = '';
            })
            .catch(e => alert(e.response.data));
        }
        else{
            alert("EL NO SE PUDO ACTULIZAR EL STOCK DEL PRODUCTO PORQUE A QUE HACE FALTA ALGÚN ESPACIO POR RELLENAR");
        }
    }
    return(
        <PagesContainer style={{flexDirection: 'column'}}>
            <AdminContainer style={{height: '55%'}}>
                <h2>Agregar producto al stock</h2>
                <FormsInput ref={idRef} type='number' placeholder="Ingrese id del producto"/>
                <FormsInput ref={nameRef} type='text' placeholder="Ingrese nombre del producto"/>
                <FormsInput ref={quantityRef} type='number' placeholder="Ingrese cantidad del producto"/>
                <FormsInput ref={priceRef} type='number' placeholder="Ingrese precio del producto"/>
                <DefaultButton style={{marginTop:'20px', width:'30%'}} onClick={()=> handleAddProductToStock()}>Enviar</DefaultButton>
            </AdminContainer>
            <AdminContainer style={{ borderTop:'2px solid lightgray', height: '40%'}}>
                <h2>Agregar stock a productos</h2>
                <FormsInput ref={id1Ref} type='number' placeholder="Ingrese id del producto"/>
                <FormsInput ref={newQuantityRef} type='number' placeholder="Ingrese cantidad a agregar"/>
                <DefaultButton style={{marginTop:'20px', width:'30%'}} onClick={()=> handleAddStockToProduc()}>Enviar</DefaultButton>
            </AdminContainer>
        </PagesContainer>
    )
}

export default AdminProductsPage;