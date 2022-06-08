import { useState } from "react"
import axios from "axios"
import TemplateDefault from "../../templates/Default"
import styles from "../../styles/projects/form-cep/formcep.module.css"


export default function FormCEP() {
    //SAVING DATA FROM FORM
    const [values, setValues] = useState({})

    function handleChange(e) {
        setValues({ ...values, [e.target.id]: e.target.value })
    }

    //AUTOCOMPLETING FROM ZIP
        //BUG: autocompleted inputs won't triggger onChange
    const [address, setAddress] = useState("")
    const [neighborhood, setNeighborhood] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")

    async function searchZIP(zip) {
        zip = zip.replace(/\D/g, "")
        const data = await fetch(`http://viacep.com.br/ws/${zip}/json/`)
            .then(data => data.json())
            .catch(data => data = "")
            
        let { logradouro="--", bairro="--", localidade="--", uf="--" } = data
        if(zip.length === 0) {
            logradouro=""; bairro="";  localidade=""; uf=""
        }
        
        setAddress(logradouro)
        setNeighborhood(bairro)
        setCity(localidade)
        setState(uf)
    }

    //SUBMITING
    function handleSubmit(e) {
        e.preventDefault()
        axios.post("http://localhost:8080", values)
            .then(res => console.log(res.data))
            .catch(res => console.log(res))
    }
        
    return (
            <main className={styles.container}>

                <div className={styles.formDiv}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.projetoCepDiv}>
                            <h1>PROJETO <span>CEP</span></h1>
                        </div>

                        {/* <div className={styles.inputbox}>
                            <label htmlFor="name">Nome</label>
                            <input className={styles.input} type="text" id="name" required onChange={e => handleChange(e)} />
                        </div>

                        <div className={styles.inputbox}>
                            <label htmlFor="password">Senha</label>
                            <input className={styles.input} type="text" id="password" required onChange={e => handleChange(e)} />
                        </div>

                        <div className={styles.inputbox}>
                            <label htmlFor="email">E-mail</label>
                            <input className={styles.input} type="text" id="email" required onChange={e => handleChange(e)} />
                        </div>

                        <div className={styles.inputbox}>
                            <label htmlFor="cellphone">Celular</label>
                            <input className={styles.input} type="text" id="cellphone" required onChange={e => handleChange(e)} />
                        </div> */}

                        <div className={styles.inputbox}>
                            <label htmlFor="zip">CEP</label>
                            <input className={styles.input} type="text" id="zip" required onChange={e => handleChange(e)} onBlur={e => searchZIP(e.target.value)} />
                        </div>

                        <div className={styles.inputbox}>
                            <label htmlFor="address">R. Casa</label>
                            <input className={styles.input} type="text" id="address" required defaultValue={address} onChange={e => handleChange(e)} />
                        </div>

                        <div className={styles.inputbox}>
                            <label htmlFor="number">Nº</label>
                            <input className={styles.input} type="text" id="number" required onChange={e => handleChange(e)} />
                        </div>

                        <div className={styles.inputbox}>
                            <label htmlFor="neighborhood">Bairro</label>
                            <input className={styles.input} type="text" id="neighborhood" required defaultValue={neighborhood} onChange={e => handleChange(e)} />
                        </div>
                        <div className={styles.inputbox}>
                            <label htmlFor="city">Cidade</label>
                            <input className={styles.input} type="text" id="city" required defaultValue={city} onChange={e => handleChange(e)} />
                        </div>

                        <div className={styles.inputbox}>
                            <label htmlFor="state">Estado</label>
                            <input className={styles.input} type="text" id="state" required defaultValue={state} onChange={e => handleChange(e)} />
                        </div>

                            <div className={styles.buttonDiv}>
                                <button className={styles.buttonSubmit} type="submit">SALVAR</button>
                            </div>
                    </form>
                </div>
            </main>
    )
}