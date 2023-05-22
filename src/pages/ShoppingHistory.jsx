import React, {useEffect, useState} from "react";
import { PagesContainer, SalesHistoryContainer } from "../components/common/Containers";
import { useSelector } from "react-redux";
import Sale from "../components/features/Sale";
import { getSalesById } from "../services/ShopApi";

const ShopppingHistory = () => {
    const user = useSelector(state => state.user);
    const [isLogged, setIsLogged] = useState(false);
    const [sales, setSales] = useState(null);
    useEffect(()=>{
        console.log(user);
        if(user.name){
            setIsLogged(true);
            getSalesById(user.id).then(r=>{
                setSales(r.data);
            }).catch(e=>console.error(e));
        }
        else{
            setIsLogged(false);
        }
    },[user])
    return(
        <>
            {isLogged?<PagesContainer style={{flexDirection: 'column'}}>
                <h2>{`Historial de compras de ${user.name}`}</h2>
                <SalesHistoryContainer>
                    {(sales&&sales.length!==0)?sales.map(sale => (
                        <Sale key={sale.id} id={sale.id} totalAmount={sale.totalAmount} dateCreated={sale.dateCreated}/>
                    )):<h3>Aún no tienes compras</h3>}
                    
                </SalesHistoryContainer>

            </PagesContainer>:
            <PagesContainer style={{flexDirection: 'column'}}>
                <h2>Por favor inicie sesión para porder ver su historial de compras</h2>
            </PagesContainer>}
        </>       
    )
}

export default ShopppingHistory;