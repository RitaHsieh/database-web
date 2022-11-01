import style from "../styles/Setting.module.css"

export default function setting() {
    return (
       <>
        <div className={style.container}>
            <p className={style.title}>帳戶設定</p>
            <div className={style.circle}></div>
            <p className={style.username}>使用者名稱</p>
            <p className={style.realname}>真實名稱</p>
            <p className={style.cellphone}>電話</p>
            <p className={style.email}>電子信箱</p>
            <button className={style.btn}>個人資訊更改</button>
            <p className={style.contact}>聯絡我們Contact us</p>
        </div>
       </>
    )
}