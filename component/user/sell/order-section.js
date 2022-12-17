import Menu from "../menu"
import style from "../../../styles/layout/home.module.css"
import Link from 'next/link';
import Header from "../../multi/header";
import { useState } from "react";

export default function Home() {

    const [hotel,setHotel] = useState('');
    const [date,setDate] = useState('');

    const hotel_options = [
        {value: '', text: '選擇旅館'},
        {value: 1 , text: '旅館A'},
        {value: 2 , text: '旅館B'},
        {value: 3 , text: '旅館C'},
    ];

    const date_options = [
        {value: '', text: '選擇日期'},
        {value: 1 , text: '1'},
        {value: 2 , text: '2'},
        {value: 3 , text: '3'},
    ];

    return (
        <>
            <Header/>
            <div className={style.userSellOrder_SettingContainer}>
                <Menu/>
                <div className={style.container}>
                    <div className={style.switch}>
                        <button className={style.innerbutton} type="button"><Link href="/user/sell/">單日銷售情形</Link></button>
                        <div className={style.buttonwhite}><p className={style.buttontext}>單筆訂單</p></div>
                    </div>
                    
                    <div className={style.filterblock}>
                        <p className={style.filterp}>旅館</p>
                        <select className={style.selectform} onChange={event=>setHotel(event.target.value)}> 
                            {hotel_options.map(option => (
                                <option className={style.option} key={option.value} value={option.value}>
                                    {option.text}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    <div className={style.filterblock}>
                        <p className={style.filterp}>日期</p>
                            <select className={style.selectform} onChange={event=>setDate(event.target.value)}> 
                                {date_options.map(option => (
                                    <option className={style.option} key={option.value} value={option.value}>
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                        <p className={style.filterp2}>顧客姓名</p>
                        <input className={style.selectform} placeholder="請輸入您的姓名"></input>
                    </div>

                    <div className={style.salesfiguresblock}>
                        
                        <p className={style.title}>呂XX 小姐</p>

                        <div className={style.infoblock}>
                            <p className={style.info1}>四人房 1 間 兩人房 1 間</p>
                            <p className={style.info2}>訂單狀態</p>
                            <button className={style.button} type="button">點我查看狀態</button>
                        </div>

                        <div className={style.infoblock}>
                            <p className={style.info1}>22/10/30-22/11/02</p>
                            <p className={style.info3}>旅館已確認 : 22/10/23 15:30</p>
                        </div>
                        
                        <div className={style.infoblock}>
                            <p className={style.info1}>住客已付款 : 匯款後五碼 01234</p>
                        </div>

                        <div className={style.infoblock}>
                            <p className={style.info1}>待核銷</p>
                            <button className={style.button} type="button">點我核銷</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
