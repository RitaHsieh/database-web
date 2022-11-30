import style from "../../styles/layout/home.module.css"
import Link from "next/link"


export default function Search() {
    return(
        <>
            <div className={style.homeLoginbtContainer}>
                <Link href="http://localhost:3000/login">
                    <input className={style.button} type="button" value="登入"/>
                </Link>
                <p>&nbsp;/&nbsp;</p>
                <Link href="https://www.youtube.com/watch?v=4JNb4fiT1VA&list=RDV91B6aQOn4k&index=13&ab_channel=%E9%BA%8B%E5%85%88%E7%94%9FMIXER">
                    <input className={style.button} type="button" value="註冊"/>
                </Link>
            </div>
        </>
    )
}
