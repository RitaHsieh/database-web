import style from "../styles/searchform.module.css"

export default function Search() {
    return(
        <>
            <div className={style.searchcontainer}> 
                <form>
                    <input className={style.location} type="text" placeholder="地點"/>
                    <input className={style.people} type="text" placeholder="人數"/>
                    <input className={style.arrivetime} type="text" placeholder="入住時間"/>
                    <input className={style.leavetime} type="text" placeholder="離開時間"/>
                    <input className={style.button} type="button" value="→)"/>
                </form>
            </div>
        </>
    )
}