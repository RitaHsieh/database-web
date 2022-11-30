import Image from "next/image"
import { StyleRegistry } from "styled-jsx"
import style from "../../styles/layout/home.module.css"
import image from '../../public/image/image.jpg'



export default function search_result() {
    return(
        <>
            <div className={style.searchResultContainer}>
                <Image src={image} alt="image" className={style.img}/> 
                <div className={style.content}>
                    <h1>旅館名稱(旅館英文名稱)</h1>
                    <p className={style.location}>旅館地址</p>
                    <p className={style.room}>訂購房型</p>
                    <div className={style.container}>
                        <p className={style.money}>NT$價錢</p>
                        <p className={style.time}>住宿時間</p>
                        <h1>訂單狀況</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

