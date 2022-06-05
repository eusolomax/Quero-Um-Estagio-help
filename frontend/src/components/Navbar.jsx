import { Link, useNavigate } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

import { useAuth } from "../auth/Auth"

import imgreact from '../public/images/reacticon.png'

import styles from '../styles/navbar/navbar.module.css'

export default function Navbar() {
    const auth = useAuth()
    const navigate = useNavigate()

    function handleLogout() {
        auth.logout()
        navigate("/")
    }

    return (
        <div className={styles.background}>
            <nav className={styles.navbar_content}>
                <ul className={styles.ul}>
                    <Link to="/">
                        <img src={imgreact} alt="LOGO" className={styles.imagem} />
                    </Link>

                    <li className={styles.li}>
                        <Link to="/" className={styles.texto}>Home</Link>
                    </li>

                    <li className={styles.li}>
                        <HashLink smooth to="#aboutus" className={styles.texto}>Sobre nós</HashLink>
                    </li>

                    <li className={styles.li}>
                        <HashLink smooth to="#projects" className={styles.texto}>Projetos</HashLink>
                    </li>

                    <li className={styles.li}>
                        <HashLink smooth to="#footer" className={styles.texto}>Contato</HashLink>
                    </li>
                    {
                        auth.user
                            ? (
                                <div>
                                    <img src="" alt="ProfPic"></img>
                                    <h2>{auth.user}</h2>
                                    <button onClick={handleLogout}>Logout</button>
                                </div>
                            )
                            : (
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
                            )
                    }
                </ul>
            </nav>
        </div>
    )
}