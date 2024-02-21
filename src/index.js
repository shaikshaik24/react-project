import { BrowserRouter,Routes,Route } from "react-router-dom";
import ReactDOM  from "react-dom/client";
import React from "react";
import Login from "./pages/login";
import Register from "./pages/register";
import Product from "./pages/productdetails";
import Layout from "./pages/layout";
import Home from "./pages/Home";

export default function App()
{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/productdetails" element={<Product/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>);