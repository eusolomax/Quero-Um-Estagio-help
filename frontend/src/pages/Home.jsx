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



            <div className={aboutus.about_us_background} id="aboutus">
                <div className={aboutus.container_about_us}>

                    <div className={aboutus.div_equip}>
                        <img src={cardvictor} alt="" className={aboutus.cards}/>
                        <p className={aboutus.p_name_victor}>VICTOR</p>
                        <p className={aboutus.p_function_victor}>FRONT-END</p>
                        <p className={aboutus.p_description_victor}>
                            Em colaboração com a equipe, desenvolveu a estética do site e pos em código toda suas funcionabilidades.
                        </p>

                        {/* <p className={aboutus.temporario}> * COLOCAR REDES SOCIAIS AQUI * </p> */}
                    </div>


                    <div className={aboutus.div_equip}>
                            <img src={cardbruno} alt="" className={aboutus.cards}/>
                        <p className={aboutus.p_name_bruno}>BRUNO</p>
                        <p className={aboutus.p_function_bruno}>FULL-STACK</p>
                        <p className={aboutus.p_description_bruno}>
                            Desenvolveu grande parte das funcionabilidades do site e os projetos em equipe, como: login, cadastro, etc.
                        </p>

                        {/* <p className={aboutus.temporario}> * COLOCAR REDES SOCIAIS AQUI * </p> */}
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

                            <p>Desde mais novo sempre tive muito contato com a programação, seja para poder editar alguns arquivos ao meu favor ou mera curiosidade de entender como tudo aquilo funcionava internamente. Em 2018, pude experienciar um amplo conhecimento em desenvolvimento de jogos com tutoriais extensos, e assim vindo a despertar meu interesse em programação, onde em 2022 pude estar dedicando todo meu tempo, para assim então estar fazendo o mesmo de minha carreira.</p>
                        </div>


                        <div className={aboutus.bioDiv}>
                            <div className={aboutus.bioTitle}>
                                <h1>Bruno Capitelli</h1>
                                <span>GheistLycis</span>
                            </div>

                            <p>Com uma constante paixão por aprender coisas novas, sempre tendeu para a ciência e tecnologia. Com 19 anos ingressou na UFABC em BC&T e com 20 anos passou a se dedicar ao estudo da programação voltada à web em NodeJS e ReactJS. Apesar disso, não planeja se limitar apenas ao desenvolvimento web, mas no futuro se aprofundar em outras áreas dentro da programação como Games, Machine Learning e Big Data.</p>
                        </div>
                    </div>
                </div>



            <div className={github.github_background}>
                <div className={github.containerDiv}>
                    <h1>Alias, este site esta no Github, corre pra olhar o codigo!</h1>

                        <a href="https://github.com/eusolomax/Quero-Um-Estagio-help" target="_blank">
                            <div className={github.githubRepoDiv}><img className={github.githubIcon} src={githubIcon}/><p>Repositorio</p></div>
                        </a>
                </div>
            </div>



            <div className={projects.projects_background} id="projects">
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
                                        <span>Um mapa global criado com React Leaflet onde é possível registrar localizações com base nas coordenadas. Dica: para descobrir as coordenadas de um lugar, abra o endereço no Google Maps e clique com o botão direito. O primeiro número é a latitude e o segundo a longitude.</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
            </div>
        </>
    )
}