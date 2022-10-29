import React from "react";
import '../css/CoffeeApp.css';

export default function SignInComponent() {
    const forwardSignInComponent = () => {
        
    }
    return (
        <div className="container">
            <h1>Chào mừng bạn đến với ứng dụng quản lí cà phê</h1>
            <a type="button" className="btn btn-primary" onClick={() => forwardSignInComponent()}>Tiếp tục</a>
        </div>
    );
}