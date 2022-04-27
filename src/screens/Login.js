import React from "react";
import {Link} from "react-router-dom"

function Login() {
  return (
    <form className="form">
      <div className="col-sm-12 col-md-6 col-1g-4 col-x1-4 m-3 p-3 bg-info">
        <div className="form-group m-2">
          <label htmlFor="email">email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        
        <div className="form-group m-2">
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
              </div>
              <div>
                  I don't have an account
                  <Link to="/register" className="nav-link">Register</Link>
              </div>
          
        
      </div>
    </form>
  );
}

export default Login
