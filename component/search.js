import style from "../styles/search.module.css"

export default function Search() {
    return(
        <>
            <div className={style.searchcontainer}> 
                <div className={`${style.after} ${style.location}`}><p>地點</p></div>
                <p>|</p>
                <div className={`${style.after} ${style.people}`}><p>人數</p></div>
                <p>|</p>
                <div className={`${style.after} ${style.arrivetime}`}><p>入住時間</p></div>
                <p>→</p>
                <div className={`${style.after} ${style.leavetime}`}><p>離開時間</p></div>
                <p>|</p>
                <div className={`${style.after} ${style.click}`}><p>→)</p></div>
            </div>
        </>
    )
}