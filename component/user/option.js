import style from "../../styles/layout/home.module.css"


export default function search_result() {
    return(
        <div className={style.userIndexOptionContainer}>  
            <button type="button" className={style.button}><p>歷史訂單紀錄</p></button>
            <button type="button" className={style.button}><p>付款資訊</p></button>
            <button type="button" className={style.button}><p>收藏紀錄</p></button>
            <button type="button" className={style.button}><p>隱私設定</p></button>
                
        </div>
    )
}
