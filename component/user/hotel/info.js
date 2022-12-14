import Menu from "../menu";
import Header from "../../multi/header";
// import Option from "./option"
import style from "../../../styles/layout/home.module.css";
import React, {useState} from 'react'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function account() {

    
    return (
        <>
            <Header/>
            <div className={style.userHotelInfoContainer}>
                <Menu/>
                <div className={style.main}>
                    <div className={style.content}>
                        <h1 className={style.title}>
                            STEP 1/4 旅館資訊
                        </h1>
                        {/* <icon></icon> */}
                        {/* <logo></logo> */}
                    </div>
                    <div className={style.content}>
                        <p className={style.contentname}>旅館名稱</p>
                        <input className={style.short_input}></input>
                    </div>
                    <div className={style.content}>
                        <p className={style.contentname}>旅館地址</p>
                        <input className={style.long_input}></input>
                    </div>
                    <div className={style.pic_content}>
                        <div className={style.contentname}>旅館圖片</div>
                        <div className={style.image}>
                        <i class="bi bi-plus-circle" className={style.pic_icon}></i>
                        </div>
                    </div>
                    <div className={style.btn_content}>
                        <button className={style.btn}>上一步</button>
                        <button className={style.btn}>下一步</button>
                    </div>



                </div>
            
            </div>
        </>
    )
}