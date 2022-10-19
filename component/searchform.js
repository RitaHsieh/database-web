import style from "../styles/searchform.module.css"

export default function Search() {
    return(
        <>
            <div className={style.searchcontainer}> 
                <form>
                    <div className={style.location}><input type="text" placeholder="地點"/></div>
                    <div className={style.people}><input type="text" placeholder="人數"/></div>
                    <div className={style.arrivetime}><input type="text" placeholder="入住時間"/></div>
                    <div className={style.leavetime}><input type="text" placeholder="離開時間"/></div>
                    <div className={style.button}><input type="button" value="→)"/></div>
                </form>
            </div>
        </>
    )
}