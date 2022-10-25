import style from "../styles/Searchform.module.css"

export default function Search() {
    return(
        <>
            <div className={style.searchcontainer}> 
                <input className={style.location} type="text" placeholder="地點"/>
                <p>|</p>
                <input className={style.people} type="text" placeholder="人數"/>
                <p>|</p>
                <input className={style.arrivetime} type="text" placeholder="入住時間"/>
                <p>→</p>
                <input className={style.leavetime} type="text" placeholder="離開時間"/>
                <p>|</p>
                <a href="https://www.youtube.com/shorts/-hNK5kKW6HY">
                    <input className={style.button} type="button" value="→)"/>
                </a>
            </div>
        </>
    )
}

