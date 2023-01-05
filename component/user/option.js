import style from "../../styles/layout/home.module.css"
import Link from "next/link"


export default function search_result() {
    return(
        <div className={style.userIndexOptionContainer}>  
            <button type="button" className={style.button}><Link href="user/history"><p>歷史訂單紀錄</p></Link></button>
            <button type="button" className={style.button}><Link href="user/payment"><p>付款資訊</p></Link></button>
            <button type="button" className={style.button}><Link href="user/collection"><p>收藏紀錄</p></Link></button>
            <button type="button" className={style.button}><Link href="user/privacysetting"><p>隱私設定</p></Link></button>
                
        </div>
    )
}
