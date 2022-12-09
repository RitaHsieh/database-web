import style from "../../styles/layout/home.module.css"
import Link from 'next/link';

export default function setting() {
    return (
       <>
        <div className={style.userIndexSettingContainer}>
            <h1>帳戶設定</h1>
            <div className={style.circle}></div>
            <div className={style.textcontainer}>
                <h2>使用者名稱</h2>
                <p className={style.realname}>真實姓名</p>
                <p className={style.cellphone}>電話號碼</p>
                <p className={style.email}>電子郵件</p>
                <Link href='/user/personalinfo'><button className={style.btn}>個人資訊更改</button></Link>
            </div>
            <p className={style.contact}><a href="">聯絡我們Contact us</a></p>
            
        </div>
       </>
    )
}