import style from "../styles/Searchform.module.css"

export default function Search() {
    return(
        <>
            <div className={style.searchcontainer}> 
                <p>地點</p>
                <p>|</p>
                <p>人數</p>
                <p>|</p>
                <p>入住時間</p>
                <p>→</p>
                <p>離開時間</p>
                <p>|</p>
                <a href="/search">
                    <input className={style.button} type="button" value="→)"/>
                </a>
            </div>
        </>
    )
}

