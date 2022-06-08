import styles from './testeusestate.module.css'
import { useState } from 'react'
import clicksound from '../../public/audio/clicksound.mp3'
import winsound from '../../public/audio/winsound.mp3'
import { Howl } from 'howler'


export default function Testeusestate() { 
    let trigger = true

    const soundclick = new Howl({
        src: [clicksound],
        html5: true,
        preload: true,
        volume: 0.4,
    })

    const soundwin = new Howl({
        src: [winsound],
        html5: true,
        preload: true,
        volume: 0.6,
    })

    const [valor, setValor] = useState(60)

    async function handleOnClick() {
        if (valor <= 1 && trigger) {
            soundwin.play()

            setValor("0")
            trigger = false

        } else {
            soundclick.play()
            setValor(valor - 1)
        }
    }

    return (
        <>
            <div className={styles.background}>
                <h1 className={styles.value}>{valor}</h1>
                <button className={styles.button} onClick={handleOnClick}>Clique!</button>
            </div>
        </>
    )
}