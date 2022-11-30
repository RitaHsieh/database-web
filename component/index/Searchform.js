import style from "../../styles/layout/home.module.css"
import { format } from 'date-fns';
import Link from 'next/link';

export default function Search({startbuttonClick,endbuttonClick,startselected,endselected,Setpeople,Setcity}) {
    const options = [
        {value: '', text: '--Choose an option--'},
        {value: 1 , text: '一人'},
        {value: 2 , text: '兩人'},
        {value: 3 , text: '三人'},
      ];

    return(
        <>  
            <div className={style.homeSearchContainer}>
                <input className={style.input} placeholder="地點" onChange={event=>{Setcity(event.target.value)}}/>
                <p>|</p>
                <select className={style.selectform} onChange={event=>Setpeople(event.target.value)}> 
                    {options.map(option => (
                        <option className={style.option} key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
                <p>|</p>
                <button className={style.time} onClick={event => startbuttonClick()}>{startselected==null?"入住時間":format(startselected, 'PP')}</button>
                <p>→</p>
                <button className={style.time} onClick={event => endbuttonClick()}>{endselected==null?"離開時間":format(endselected, 'PP')}</button>
                <p>|</p>
                <Link href="/search">
                    <input className={style.button} type="button" value="→)"/>
                </Link>
            </div>
        </>
    )
}

