import React from "react"
import Header from "./components/features/Header"
import { Container } from "./components/common/Containers"
import ProductsPage from "./pages/ProductsPage"

function App() {

  return (
    <Container>
      <Header/>
      <ProductsPage/>
    </Container>
  )
}

export default App
