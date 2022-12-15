import Menu from "../menu"
import style from "../../../styles/layout/home.module.css"
import Link from 'next/link';
import Header from "../../multi/header";
import Table from './table'
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
            <div className={style.userSellIndex_SettingContainer}>
                <Menu/>
                <div className={style.container}>
                    <div className={style.switch}>
                        <div className={style.buttonwhite}><p className={style.buttontext}>單日銷售情形</p></div>
                        <button className={style.innerbutton} type="button"><Link href="/user/sell/order">單筆訂單</Link></button>
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
                        <p className={style.filterp2}>日期</p>
                        <select className={style.selectform} onChange={event=>setDate(event.target.value)}> 
                            {date_options.map(option => (
                                <option className={style.option} key={option.value} value={option.value}>
                                    {option.text}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={style.salesfiguresblock}>
                        <div className={style.textcontainer}>
                            <p className={style.title}>售出房型</p>
                            <div className={style.moneycontainer}>
                                <p className={style.sale}>總銷額：</p>
                                <p className={style.money}>NTD 10000$</p>
                            </div>
                        </div>
                        <Table/>
                    </div>
                </div>
            </div>
        </>
    )
}
