import { Outlet, Link } from "react-router-dom";
import React from "react";
import "../style.css";
import m2 from "../images/m2.jpeg";
const Layout = () => {
  return (
    <>
     
        <div className="logo-content">
         
            <h1>Sleepy owls</h1>
          </div>
      <div>
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <div className="col-md-4">
          <a class="navbar-brand" href="#">
            <img src={m2}></img>
          </a>
        </div>
        <div className="col-md-8">
          <center>
            <ul class="nav navbar-nav">
              <li class="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/productdetails">Product</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
            <form class="form-inline" action="/action_page.php">
    <input class="form-control mr-sm-2" type="text" placeholder="pick your choies"/>
    <button class="btn btn-success" type="submit">Search</button>
  </form>
  </ul>   
          </center>
        </div>
        </nav>
      </div>
      
      <Outlet />
      
    </>
  );
};
export default Layout;
