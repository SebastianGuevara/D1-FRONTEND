import React, { useEffect, useState } from "react";
import { PagesContainer, SalesHistoryContainer } from "../components/common/Containers";
import Sale from "../components/features/Sale";
import { getSales } from "../services/ShopApi";
const AdminUsers = () =>{
    const [sales, setSales] = useState(null);
    useEffect(()=>{
        getSales().then(r=>setSales(r.data)).catch(e=>console.error(e));
        console.log(sales);
    },[])
    return(
        <PagesContainer style={{flexDirection: 'column'}}>
                <h2>Historial de ventas</h2>
                <SalesHistoryContainer>
                    {sales&&sales.map(sale =>(
                        <Sale key={sale.id} id={sale.id} documentClient={sale.documentClient} totalAmount={sale.totalAmount} dateCreated={sale.dateCreated}/>
                    ))}
                </SalesHistoryContainer>
        </PagesContainer>
    )
}

export default AdminUsers