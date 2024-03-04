/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";

import { BsCart } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
const Nav = () => {
  const count = useSelector((state) => state.products.cartList.length);
  return (
    <nav>
      <h3>logo</h3>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="shose" className="cat">
            <>
              {" "}
              categories <BiChevronDown className="down" />{" "}
            </>
            <div className="menue">
              <ul>
                <li>
                  <Link to="Shose">SHOES FOR BABIES</Link>
                </li>
                <li>
                  <Link to="demo">BABIES OUTFITS</Link>
                </li>
                <li>
                  <Link to="demo">BABIES DRESSES</Link>
                </li>
                <li>
                  <Link to="demo">SHOES FOR BABIES</Link>
                </li>
                <li>
                  <Link to="demo">MOTHER & DAUGHTER</Link>
                </li>
                <li>
                  <Link to="demo">SUMMER CLASSICS</Link>
                </li>
              </ul>
            </div>
          </Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>

      <div className="icons">
        <Link to="cart">
          <BsCart className="icon " />
        </Link>
        <span className="iconCount">{count}</span>
      </div>
    </nav>
  );
};

export default Nav;
