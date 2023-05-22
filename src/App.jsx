import React from "react"
import Header from "./components/features/Header"
import { Container } from "./components/common/Containers"
import ProductsPage from "./pages/ProductsPage"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom/dist"
import AdminProductsPage from "./pages/AdminProductsPage";
import AdminUsers from "./pages/AdminUsers";
import ShopppingHistory from "./pages/ShoppingHistory";
import { useSelector } from "react-redux";

function App() {
  const menu = useSelector(state => state.menu)

  return (
    <Container scroll={menu.scroll}>
      <Router>
        <Header/>
        <Routes>
          <Route path="/adminProduct" element={<AdminProductsPage/>}/>
          <Route path="/adminUser" element={<AdminUsers/>}/>
          <Route path="/shoppingHistory" element={<ShopppingHistory/>}/>
          <Route path="/" element={<ProductsPage/>}/>
        </Routes>  
      </Router>  
    </Container>
  )
}

export default App
