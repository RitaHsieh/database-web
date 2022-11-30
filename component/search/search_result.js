import Image from "next/image"
import { StyleRegistry } from "styled-jsx"
import style from "../../styles/layout/home.module.css"
import image from '../../public/image/image.jpg'



export default function search_result(props) {
    return(
        <>
            <div className={style.searchResultContainer}>
                <Image src={image} alt="image" className={style.img}/> 
                <div className={style.content}>
                    <h1>{props.name}</h1>
                    <p className={style.location}>{props.addr}</p>
                    <p className={style.room}>{props.room}</p>
                    <div className={style.container}>
                        <p className={style.money}>{props.price}</p>
                        <p className={style.time}>{props.time}</p>
                        <h1>{props.condition}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

