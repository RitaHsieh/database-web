import style from "../../styles/layout/home.module.css"
import { format } from 'date-fns';

export default function Search({startbuttonClick,endbuttonClick,startselected,endselected}) {

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
                <button className={style.time} onClick={event => startbuttonClick()}>{startselected==null?"入住時間":format(startselected, 'PP')}</button>
                <p>→</p>
                <button className={style.time} onClick={event => endbuttonClick()}>{endselected==null?"離開時間":format(endselected, 'PP')}</button>
                <p>|</p>
                <a href="/search">
                    <input className={style.button} type="button" value="→)"/>
                </a>
            </div>
        </>
    )
}

