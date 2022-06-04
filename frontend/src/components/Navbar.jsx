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
                        <Link to="#" className={styles.texto}>Home</Link>
                    </li>

                    <li className={styles.li}>
                        <Link to="#" className={styles.texto}>Sobre nós</Link>
                    </li>

                    <li className={styles.li}>
                        <Link to="#" className={styles.texto}>Projetos</Link>
                    </li>

                    <li className={styles.li}>
                        <Link to="#" className={styles.texto}>Contato</Link>
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