import Menu from "../menu";
import Header from "../../multi/header";
// import Option from "./option"
import style from "../../../styles/layout/home.module.css";
import React, {useState} from 'react'
import Link from "next/link";
import 'react-day-picker/dist/style.css';

export default function account() {

    
    return (
        <>
            <Header/>
            <div className={style.userHotelNoticeContainer}>
                <Menu/>
                <div className={style.main}>
                    <div className={style.content}>
                        <h1 className={style.title}>STEP 3/3 旅館資訊</h1>
                        {/* <button className={style.hotelbutton}><Link href="/">預覽畫面</Link></button> */}
                    </div>

                    <div className={style.content}>
                        <p className={style.contentname}>入住時間</p>
                        <input className={style.short_input}></input>
                    </div>

                    <div className={style.content}>
                        <p className={style.contentname}>退房時間</p>
                        <input className={style.long_input}></input>
                    </div>

                    <div className={style.content}>
                        <p className={style.contentname}>退訂/訂金規定</p>
                        <input className={style.short_input}></input>
                    </div>

                    <div className={style.check_content}>
                        <p className={style.contentname}>吸菸管制</p>
                        <button className={style.btn}></button>
                        <p className={style.selection}>允許</p>
                        <button className={style.btn}></button>
                        <p className={style.selection}>禁止</p>
                    </div>


                    <div className={style.content}>
                        <p className={style.contentname}>孩童加床選項</p>
                        <input className={style.long_input}></input>
                    </div>

                    <div className={style.check_content}>
                        <p className={style.contentname}>寵物</p>
                        <button className={style.btn}></button>
                        <p className={style.selection}>允許</p>
                        <button className={style.btn}></button>
                        <p className={style.selection}>禁止</p>
                    </div>

                    <p className={style.spacing}>交通描述</p>
                    <textarea className={style.textarea}></textarea>
                    {/* <div className={style.pic_content}>
                        <div className={style.contentname}>交通描述</div>
                        <input className={style.image}>
                        
                        </input>

                    </div> */}
                    <div className={style.btn_content}>
                    <button className={style.btn}><Link href="/user/hotel/room">上一步</Link></button>
                        <button className={style.btn}>完成</button>
                    </div>
                </div>
            
            </div>
        </>
    )
}