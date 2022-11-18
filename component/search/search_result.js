import { StyleRegistry } from "styled-jsx"
import style from "../../styles/search_result.module.css"


export default function search_result() {
    return(
        <>
            <div className={style.searchcontainer}>
                <img src="image.jpg" alt="image" className={style.img}/> 
                <div className={style.content}>
                    <h1 className={style.name}>旅館名稱(旅館英文名稱)</h1>
                    <div>
                        <p className={style.location}>旅館地址</p>
                        <p className={style.room}>訂購房型</p>
                    </div>
                    <div className={style.container}>
                        <p className={style.money}>NT$價錢</p>
                        <p className={style.time}>住宿時間</p>
                        <p className={style.situation}>訂單狀況</p>
                    </div>
                </div>
            </div>
        </>
    )
}

