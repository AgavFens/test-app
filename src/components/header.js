import React from "react";

class Header extends React.Component{
  render(){
    return(
    <heade>
        <nav class="navigation">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Menu</a>
        <a href="#">Contact Us</a>
    </nav>
    <button class="order-button">Order Now</button>
    </heade>
    )
  }
}

export default Header