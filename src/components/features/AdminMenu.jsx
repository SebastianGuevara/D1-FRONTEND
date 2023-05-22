import React from 'react'
import { AdminMenuButtonsContainer, AdminSideBarContainer, MiniHeaderContainer } from '../common/Containers'
import { Logo } from '../common/Images';
import { Icon } from '@iconify/react';
import { AdminMenuButton } from '../common/Buttons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleScroll } from '../../redux/slices/menuSlice';

const AdminMenu = (props) =>{
    const dispatch = useDispatch();
    const handleClose = () =>{
        dispatch(handleScroll({scroll:'scroll'}));
        props.close(0)
    }
    return(
        <AdminSideBarContainer width={props.width}>
            <MiniHeaderContainer>
                <Link to='/'>
                    <Logo style={{height:'40px', width:`calc(40px*${props.width})`, marginLeft:'24px'}} src='/images/D1logo.png'/>
                </Link> 
                <Icon icon="ph:x-bold" color="#fdeeef" width="25" style={{position:'absolute',right:'25px',cursor:'pointer'}} onClick={()=>handleClose()}/>
            </MiniHeaderContainer>
            <AdminMenuButtonsContainer>
                <h3 style={{marginLeft:'24px'}}>Menú de Administrador</h3>
                <Link to='/' style={{textDecoration: 'none', width: '100%'}}>
                    <AdminMenuButton>
                        <span>Inicio</span>
                    </AdminMenuButton>
                </Link>
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