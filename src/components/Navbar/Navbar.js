import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logoHeading}>
                <div className={styles.logo}>
                    <img src='https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/Logo.png'></img>
                </div>
                <div className={styles.heading}>
                    <h1>Ali Snobba</h1>
                </div>
            </div>
            <div className={styles.links}>
                <Link to="/"> Shop </Link>
                <Link to="/cart">
                    <ShoppingCart size={32} />
                </Link>
            </div>
        </div>
    );
};