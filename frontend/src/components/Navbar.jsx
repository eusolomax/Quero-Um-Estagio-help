import { Link } from "react-router-dom"

import imgreact from '../public/images/reacticon.png'

import styles from '../styles/navbar/navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.background}>
            <nav className={styles.navbar_content}>
                <ul className={styles.ul}>
                    <Link to="/">
                        <img src={imgreact} alt="LOGO" className={styles.imagem} />
                    </Link>

                    <li className={styles.li}>
                        <Link to="#" className={styles.texto}>About</Link>
                    </li>

                    <li className={styles.li}>
                        <Link to="#" className={styles.texto}>Services</Link>
                    </li>

                    <li className={styles.li}>
                        <Link to="#" className={styles.texto}>Projects</Link>
                    </li>

                    <li className={styles.li}>
                        <Link to="#" className={styles.texto}>Contact Us</Link>
                    </li>

                    <div className={styles.content_loginregister}>
                        <div className={styles.button}>
                            <li className={styles.li_loginregister}>
                                <Link to="/user/login" className={styles.texto_loginregister}>Login</Link>
                            </li>  
                        </div>   

                        <div className={styles.button}>
                            <li className={styles.li_loginregister}>
                                <Link to="/user/register" className={styles.texto_loginregister}>Register</Link>
                            </li>  
                        </div>
                    </div> 
                </ul>
            </nav>
        </div>
    )
}