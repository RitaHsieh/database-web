import style from "../../styles/layout/home.module.css"
import {useState} from 'react';

export default function hotelinfo() {
    const [number,setNumber] = useState(1);
    const add_btnClick = ()=>{
        setNumber(number+1);
    }
    const minus_btnClick = ()=>{
        setNumber(number-1);
    }

    return (
        <>
            <div className={style.hotelInfoRoomContainer}>
                <div className={style.searchcontainer}>
                    <div className={style.container}>
                        <h1 className={style.name}>經典雙人房</h1>
                        <p className={style.people}>可容納人數：2 人</p>
                    </div>
                    <p className={style.bed}>單張雙人床</p>
                    <div className={style.container}>
                        <p className={style.intro}>(房型簡介) 床鋪舒適，評分 8.5（ 根據 98 則評語）
                        <br></br>此 Villa 設有電熱水壺、磁磚／大理石地板和平面電視。</p>
                        <p className={style.money}>NT$2400</p>
                    </div>
                    <div className={style.container}>
                        <button className={style.button} type="button">按鈕1</button>
                        <button className={style.button} type="button">按鈕2</button>
                        <button className={style.button} type="button">按鈕3</button>
                        <button className={style.button} type="button">按鈕4</button>
                        <p className={style.discount}>原價3600,現省1200元</p>
                    </div>
                </div>            
                <div className={style.button_container}>
                    <button className={style.btn} style={{visibility: number >= 10 && 'hidden'}} onClick={add_btnClick}>▲</button>
                    <div className={style.content}>{number}</div>
                    <button className={style.btn} style={{visibility: number <= 0 && 'hidden'}} onClick={minus_btnClick}>▼</button>
                </div>

            </div>
        </>
    )
}