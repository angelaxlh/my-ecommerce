import React from "react";
import CartWidget  from "../CartWidget";

export const Navbar= () =>{
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="#">MiMarca</a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a className="nav__link" href="#">Categoria 1</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Categoria 2</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">
                        <CartWidget/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Navbar;