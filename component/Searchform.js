import style from "../styles/Searchform.module.css"
import {Head} from "next/head"

export default function Search() {

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
                <p>入住時間</p>
                <p>→</p>
                <p>離開時間</p>
                <p>|</p>
                
                    <a href="https://www.youtube.com/shorts/-hNK5kKW6HY">
                        <input className={style.button} type="button" value="→)"/>
                    </a>
            </div>
        </>
    )
}

