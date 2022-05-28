import gif from '../public/images/mouse.gif'
import cardvictor from '../public/images/cardphotos/victor.jpg'
import cardbruno from '../public/images/cardphotos/bruno.jpg'

import styles from '../styles/home/q_u_e.module.css'
import styles2 from '../styles/home/about_us.module.css'
import styles3 from '../styles/home/projects.module.css'


export default function Home() {
    return (
        <>
            <div className={styles.q_u_e_background}>
                <div className={styles.container_top}>
                    <div className={styles.container_q_u_e}>
                        <h1 className={styles.h1_q_u_e}>QUERO UM</h1>
                        <h1 className={styles.h1_q_u_e}>ESTAGIO <span className={styles.help_color}>.HELP</span> </h1>
                    </div>
                    
                    <div className={styles.container_gif}>
                        <img src={gif} alt="" className={styles.gif_mouse}/>
                    </div> 

                    <div className={styles.container_por_favor}>
                        <h1 className={styles.h1_por_favor}>POR FAVOR!</h1>

                    </div>  
                </div>

                    <div className={styles2.div_merecemos}>
                        <h1 className={styles2.h1_merecemos}>três coders, um sonho: ter renda fixa!</h1>
                    </div>
            </div>



            <div className={styles2.about_us_background}>
                <div className={styles2.container_about_us}>
                    <div className={styles2.div_equip}>
                        <img src={cardvictor} alt="" className={styles2.cards}/>
                        <p className={styles2.p_name_victor}>VICTOR</p>
                        <p className={styles2.p_function_victor}>FRONT-END</p>
                        <p className={styles2.p_description_victor}>
                            Em colaboração com a equipe, desenvolveu a estética do site e pos em código toda suas funcionabilidades.
                        </p>
                    </div>

                    <div className={styles2.div_equip}>
                            <img src={cardbruno} alt="" className={styles2.cards}/>
                        <p className={styles2.p_name_bruno}>BRUNO</p>
                        <p className={styles2.p_function_bruno}>FULL-STACK</p>
                        <p className={styles2.p_description_bruno}>
                            Desenvolveu grande parte das funcionabilidades do site e os projetos em equipe, como: login, cadastro, etc.
                        </p>
                    </div>

                </div>
            </div>



            <div className={styles3.projects_background}>
                    <div className={styles3.nossos_projetos}>
                        <h1 className={styles3.h1_nossos_projetos}>Dá uma olhada nos projetos 🔥</h1>
                    </div>

                    <div className={styles3.container_projetos}>
                        
                    </div>
            </div>
        </>
    )
}