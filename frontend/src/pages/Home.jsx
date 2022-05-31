//Import de Componentes
import { Link } from "react-router-dom"

//Import de conteudo
import gif from '../public/images/mouse.gif'
import cardvictor from '../public/images/cardphotos/victor.jpg'
import cardbruno from '../public/images/cardphotos/bruno.jpg'
import githubIcon from '../public/images/githubIcon.png'
import mapPhoto from '../public/projects/mapphoto.png'

//Importe de CSS
import q_u_e from '../styles/home/q_u_e.module.css'
import aboutus from '../styles/home/about_us.module.css'
import projects from '../styles/home/projects.module.css'
import github from '../styles/home/github.module.css'


export default function Home() {
    return (
        <>
            <div className={q_u_e.q_u_e_background}>
                <div className={q_u_e.container_top}>
                    <div className={q_u_e.container_q_u_e}>
                        <h1 className={q_u_e.h1_q_u_e}>QUERO UM</h1>
                        <h1 className={q_u_e.h1_q_u_e}>ESTAGIO <span className={q_u_e.help_color}>.HELP</span> </h1>
                    </div>
                    
                    <div className={q_u_e.container_gif}>
                        <img src={gif} alt="" className={q_u_e.gif_mouse}/>
                    </div> 

                    <div className={q_u_e.container_por_favor}>
                        <h1 className={q_u_e.h1_por_favor}>POR FAVOR!</h1>

                    </div>  
                </div>

            </div>
                    <div className={aboutus.div_merecemos}>
                        <h1 className={aboutus.h1_merecemos}>dois coders, um sonho: ter renda fixa!</h1>
                    </div>



            <div className={aboutus.about_us_background}>
                <div className={aboutus.container_about_us}>

                    <div className={aboutus.div_equip}>
                        <img src={cardvictor} alt="" className={aboutus.cards}/>
                        <p className={aboutus.p_name_victor}>VICTOR</p>
                        <p className={aboutus.p_function_victor}>FRONT-END</p>
                        <p className={aboutus.p_description_victor}>
                            Em colaboração com a equipe, desenvolveu a estética do site e pos em código toda suas funcionabilidades.
                        </p>

                        <p className={aboutus.temporario}> * COLOCAR REDES SOCIAIS AQUI * </p>
                    </div>


                    <div className={aboutus.div_equip}>
                            <img src={cardbruno} alt="" className={aboutus.cards}/>
                        <p className={aboutus.p_name_bruno}>BRUNO</p>
                        <p className={aboutus.p_function_bruno}>FULL-STACK</p>
                        <p className={aboutus.p_description_bruno}>
                            Desenvolveu grande parte das funcionabilidades do site e os projetos em equipe, como: login, cadastro, etc.
                        </p>

                        <p className={aboutus.temporario}> * COLOCAR REDES SOCIAIS AQUI * </p>
                    </div>

                </div>

            </div>
                <div className={aboutus.about_us_background}>
                    <div className={aboutus.container_our_bio}>
                        <div className={aboutus.bioDiv}>
                            <div className={aboutus.bioTitle}>
                                <h1>Victor Capitelli</h1>
                                <span>Solomax</span>
                            </div>

                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, dicta. Corrupti assumenda quos dolore doloribus! Quo neque laborum libero natus ad saepe rerum officiis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quod neque voluptate et. Voluptatem architecto necessitatibus ipsam repudiandae <br></br> voluptates asperio ssumenda omnis distinctio? dignissimos, modi accusamus unde laboriosam nemo?</p>
                        </div>


                        <div className={aboutus.bioDiv}>
                            <div className={aboutus.bioTitle}>
                                <h1>Bruno Capitelli</h1>
                                <span>GheistLycis</span>
                            </div>

                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quod neque voluptate et. Voluptatem architecto necessitatibus ipsam repudiandae, voluptates asperiores fugiat, dolore cum est velit ex aperiam assumenda omnis distinctio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quod neque voluptate et. Voluptatem architecto necessitatibus <br></br> ipsam repudiandae, voluptates asperiores fugiat, dolore cum est velit ex aperiam assumenda omnis distinctio?</p>
                        </div>
                    </div>
                </div>



            <div className={github.github_background}>
                <div className={github.containerDiv}>
                    <h1>Alias, este site esta no Github, corre pra olhar o codigo!</h1>

                        <a href="https://github.com/eusolomax/Quero-Um-Estagio-help" target="_blank">
                            <div className={github.githubRepoDiv}><img className={github.githubIcon} src={githubIcon}/><p>Repositório</p></div>
                        </a>
                </div>
            </div>



            <div className={projects.projects_background}>
                    <div className={projects.nossos_projetos}>
                        <h1 className={projects.h1_nossos_projetos}>Da uma olhadinha nos projetos desenvolvidos 🔥</h1>
                    </div>

                    <div className={projects.container_projetos}>
                        <div className={projects.div_cardProjeto}>

                            <Link to="/projects/map">
                                <div className={projects.div_projeto}>
                                    <img src={mapPhoto} alt="" className={projects.projects_img}/>
                                    
                                        <div className={projects.div_projeto_desc}>
                                    <h1>PROJETO MAP</h1>
                                            Este projeto foi desenvolvido com a biblioteca React Leaflet, que é uma biblioteca de mapas. Nele é possível criar mapas, adicionar marcadores, etc.
                                        </div>
                                </div>
                            </Link>
                        </div>
                    </div>
            </div>
        </>
    )
}