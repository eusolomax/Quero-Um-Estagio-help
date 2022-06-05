import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useAuth } from "../../auth/Auth"

import styles from "../../styles/users/register/register.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faEye, 
    faEyeSlash,
    faEnvelope,
} from "@fortawesome/free-regular-svg-icons"
import { 
    faCircleUser,
    faClipboardQuestion,
    faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons"

//obs: mds que sono vontade de morrer xande vc me paga
export default function Register() {
    //SAVING INPUTS
    const [values, setValues] = useState({})
    function handleChange(e) {
        setValues({ ...values, [e.target.id]: e.target.value })
    }
    useEffect(() => {
        handlePassword()
        handlePassword2()
    }, [values])

    //VALIDATING FORM
    const [validation, setValidation] = useState({ 
        validPassword: false, 
        passwordsMatch: false 
    })

    const [passwordRequirements, setPasswordRequirements] = useState({ 
        fiveChars: false, 
        oneSpecial: false, 
        oneUppercase: false 
    })
    function handlePassword() {
        const { password="" } = values
        const passwordIsValid = (
            password.length >= 5 &&
            /['-="!@#$%¨&*()_+]/.test(password) &&
            /[A-Z]/.test(password)
        )

        setValidation(prevState => ({ 
            ...prevState,
            validPassword: passwordIsValid
        }))

        setPasswordRequirements(({
            fiveChars: password.length >= 5, 
            oneSpecial: /['-="!@#$%¨&*()_+]/.test(password), 
            oneUppercase: /[A-Z]/.test(password) 
        }))
    }
    function handlePassword2() {
        const { password, password2 } = values
        const validPassword2 = password === password2

        setValidation(prevState => ({ 
            ...prevState,
            passwordsMatch: validPassword2
        }))
    }

    //SUBMITING
    const auth = useAuth()
    const navigate = useNavigate()

    function handleLogin(user){
        auth.login(user)
        navigate("/", { replace: true })
    }

    function handleSubmit(e) {
        e.preventDefault()

        for(let check in validation){
            if(!validation[check]){
                switch(check){
                    case "validPassword":
                        alert("Insira uma senha válida!")
                        break
                    case "passwordsMatch":
                        alert("As senhas devem coincidir!")
                        break
                    default:
                        break
                }
                return
            }
        }

        // IF WITH BACKEND SERVER ON
        // delete values.password2
        // const res = axios.post("http://localhost:8080", values)
        //     .then(res => res)
        //     .catch(res => console.log(res))
        
        const res = values
        
        handleLogin(res.name)
    }

    //TRIGGER PASSWORD VIEWING
    const [passwordInputType, setPasswordInputType] = useState("password")

    function handleViewPassword() {
        passwordInputType === "password" 
            ? setPasswordInputType("text")
            : setPasswordInputType("password")
    }

    return (
        <main className={styles.container}>
            <div className={styles.overlay}>
                <h1 className={styles.cadastrar}>Cadastrar</h1>

                <div className={styles.formDiv}>
                    <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}> 
                        <div className={styles.inputBox}>
                            <FontAwesomeIcon icon={faCircleUser} className={styles.icon} />
                            <input type="text" id="name" required placeholder="Nome" onChange={e => handleChange(e)} className={styles.input}/>
                        </div>

                        <div className={styles.inputBox}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                            <input type="email" id="email" required placeholder="E-mail" onChange={e => handleChange(e)} className={styles.input} />
                        </div>

                        <div>
                            <div className={styles.inputBox}>
                                {
                                    validation.validPassword
                                    ? <FontAwesomeIcon icon={faClipboardCheck} className={styles.icon} />
                                    : <FontAwesomeIcon icon={faClipboardQuestion} className={styles.icon} />
                                }
                                <input type={passwordInputType} id="password" placeholder="Senha" required onChange={e => handleChange(e)} className={styles.input} />
                                <button type="button" onClick={handleViewPassword} className={`${styles.btnViewPassword} ${styles.icon}`}>
                                    {
                                        passwordInputType === "text"
                                        ? <FontAwesomeIcon icon={faEye} />
                                        : <FontAwesomeIcon icon={faEyeSlash} />
                                    }
                                </button>
                            </div>
                            
                            <ul className={styles.dependencesDiv}>
                                <li className={passwordRequirements.fiveChars ? styles.oddOut : ""}>
                                    5 Caracteres
                                </li>
                                <li className={passwordRequirements.oneSpecial ? styles.oddOut : ""}>
                                    1 Caractere Especial
                                </li>
                                <li className={passwordRequirements.oneUppercase ? styles.oddOut : ""}>
                                    1 Letra Maiúscula
                                </li>
                            </ul>

                        </div>

                        <div className={styles.inputBox}>
                            {
                                validation.passwordsMatch
                                ? <FontAwesomeIcon icon={faClipboardCheck} />
                                : <FontAwesomeIcon icon={faClipboardQuestion} />
                            }

                            <input type={passwordInputType} id="password2" placeholder="Repita a senha" required onChange={e => handleChange(e)} className={styles.input} />
                        </div>
                        
                        <div className={styles.buttonDiv}>
                            <button className={styles.btnRegister}>Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>  
        </main>
    )
}