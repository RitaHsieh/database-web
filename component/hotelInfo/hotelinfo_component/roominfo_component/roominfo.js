import style from "../../../../styles/layout/home.module.css"
import Left from "./room"
import Right from "./book"

export default function roominfo() {

    return (
        <>
            <div className={style.roominfo}>
                <div className={style.title}><p>房型</p></div>
                <div className={style.left}>
                    <Left className={style.left}/>
                    <Left className={style.left}/>
                    <Left className={style.left}/>
                </div>
                <Right className={style.right}/> 
            </div>
        </>
    )
}