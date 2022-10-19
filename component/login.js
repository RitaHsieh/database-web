import style from "../styles/login.module.css"

export default function Search() {
    return(
        <>
            <div className={style.container}>
                <a href="https://www.youtube.com/watch?v=r8n4OnlDVqE&list=RDV91B6aQOn4k&index=2&ab_channel=SweetJohn%E7%94%9C%E7%B4%84%E7%BF%B0">
                    <input className={style.button} type="button" value="登入"/>
                </a>
                <p>/</p>
                <a href="https://www.youtube.com/watch?v=4JNb4fiT1VA&list=RDV91B6aQOn4k&index=13&ab_channel=%E9%BA%8B%E5%85%88%E7%94%9FMIXER">
                    <input className={style.button} type="button" value="註冊"/>
                </a>
            </div>
        </>
    )
}
