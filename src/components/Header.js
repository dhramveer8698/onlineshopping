import React from 'react';
import { Link} from 'react-router-dom';
import { useCartContext } from "../context/cart_context";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
 const { total_item } = useCartContext();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <img className='ama' src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-19983.jpg" alt="amazon" />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <li className="nav-item">
            <Link className="header navLink nav-link active" aria-current="page"  to='/'>HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="header navLink nav-link"  to='/about'>ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link className="header navLink nav-link"  to='/products'>PRODUCTS</Link>
          </li>
          <li className="nav-item">
            <Link className="header navLink nav-link"  to='/contact'>CONTACT</Link>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="total cart-total--item"> {total_item} </span>
            </NavLink>
          </li>
      </div>
    </div>
  </nav>
  ) 
}

export default Header;