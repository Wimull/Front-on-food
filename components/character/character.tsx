import Image from "next/image"
import Styles from "./character.module.css"



export function Character(){
    return(
    <div className={Styles.container}>
        <div className={Styles.device}>
            <Image 
            src="/images/home/device.png"
            width={145}
            height={285}
            alt="Celular"
            />
        </div>
        <div className={Styles.character}>
            <Image 
            src="/images/home/character.png"
            width={183}
            height={247}
            alt="Menina mexendo no celular"
            />
        </div>
        <div className={Styles.background}>
            <Image 
            src="/images/home/background.png"
            width={328}
            height={320}
            alt="Cenário"
            />
        </div>
        <div className={Styles.bubble}>
            <Image 
            src="/images/home/speech-bubble.png"
            width={62}
            height={72}
            alt="Pensando em pedir comida chinêsa pelo celular"
            />
        </div>
        <hr />
    </div>
    )
}