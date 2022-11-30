import style from "../../styles/layout/home.module.css"
import Link from "next/link"


export default function Search() {
    return(
        <>
            <div className={style.homeLoginbtContainer}>
                <Link href="/login">
                    <input className={style.button} type="button" value="登入"/>
                </Link>
                <p>&nbsp;/&nbsp;</p>
                <Link href="/register">
                    <input className={style.button} type="button" value="註冊"/>
                </Link>
            </div>
        </>
    )
}
