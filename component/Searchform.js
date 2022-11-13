import style from "../styles/home.css";

export default function Search({buttonClick}) {

    return(
        <>  
            <div className={style.searchcontainer}>
                <p>地點</p>
                <p>|</p>
                <select className={style.selectform} name="people" id="people"> 
                    <option className={style.option} value="none" selected disabled hidden>人數</option> 
                    <option className={style.option} value="one">&nbsp;&nbsp;1人</option> 
                    <option className={style.option} value="two">&nbsp;&nbsp;2人</option> 
                    <option className={style.option} value="three">&nbsp;&nbsp;3人</option> 
                    <option className={style.option} value="four">&nbsp;&nbsp;4人</option> 
                </select>
                <p>|</p>
                <button className={style.time} onClick={event => buttonClick()}>入住時間</button>
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

