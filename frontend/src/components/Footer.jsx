import CookieConsent from "react-cookie-consent"

import linkedinIcon from "../public/images/linkedinIcon.png"
import githubIcon from "../public/images/githubIcon.png"

import styles from "../styles/footer/footer.module.css"

export default function Footer() {
    return (
        <div className={styles.footer} id="#footer">
            <div className={styles.content}>
                <div className={styles.row}>
                    <hr />
                    <a href="https://www.linkedin.com/in/brunocapitelli/" target="blank"><img src={linkedinIcon} className={styles.social_icon} /></a>
                    <p>Bruno Capitelli</p>
                    <a href="https://github.com/GheistLycis" target="blank"><img src={githubIcon} className={styles.social_icon} /></a>
                    <hr />
                </div>
                <div className={styles.row}>
                    <hr />
                    <a href="https://www.linkedin.com/in/victor<hr />capitelli/" target="blank"><img src={linkedinIcon} className={styles.social_icon} /></a>
                    <p>Victor Capitelli</p>
                    <a href="https://github.com/eusolomax/" target="blank"><img src={githubIcon} className={styles.social_icon} /></a>
                    <hr />
                </div>
            </div>

            {/* <CookieConsent
                location="bottom"
                buttonText="Sure man!!"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#ffffff", color: "#000000" }}
                buttonStyle={{ fontSize: "18px" }}
                expires={150}>
                This website uses cookies to enhance the user experience.{" "}
                <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
            </CookieConsent> */}
        </div>
    )
}