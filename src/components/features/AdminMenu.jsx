import React from 'react'
import { AdminMenuButtonsContainer, AdminSideBarContainer, MiniHeaderContainer } from '../common/Containers'
import { Logo } from '../common/Images';
import { Icon } from '@iconify/react';
import { AdminMenuButton } from '../common/Buttons';
import { Link } from 'react-router-dom';

const AdminMenu = (props) =>{
    return(
        <AdminSideBarContainer width={props.width}>
            <MiniHeaderContainer>
                <Link to='/'>
                    <Logo style={{height:'40px', width:`calc(40px*${props.width})`, marginLeft:'24px'}} src='/images/D1logo.png'/>
                </Link> 
                <Icon icon="ph:x-bold" color="#fdeeef" width="25" style={{position:'absolute',right:'25px',cursor:'pointer'}} onClick={()=>props.close(0)}/>
            </MiniHeaderContainer>
            <AdminMenuButtonsContainer>
                <h3 style={{marginLeft:'24px'}}>Menú de Administrador</h3>
                <Link to='adminProduct' style={{textDecoration: 'none', width: '100%'}}>
                    <AdminMenuButton>
                        <span>Administrar Productos</span>
                    </AdminMenuButton>
                </Link> 
                <Link to='adminUser' style={{textDecoration: 'none', width: '100%'}}>
                    <AdminMenuButton>
                        <span>Ver historial de ventas</span>
                    </AdminMenuButton>
                </Link>
                
            </AdminMenuButtonsContainer>
            
            
        </AdminSideBarContainer>
    )
}

export default AdminMenu;