import React  from "react";
import m2 from "../images/m2.jpeg";

const Login=()=>{
    return(
        <>
        <br></br>
        <br></br>
        <div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
        <img src={m2}></img>
            <h2 class="text-center mb-4">Login</h2>
            <form>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" placeholder="Enter your username"/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter your password"/>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Login</button>
            </form>
            <p class="text-center mt-3">Don't have an account? <a href="#">Sign up here</a></p>
        </div>
    </div>
</div>
              
          
    </>

    )
}
export default Login;