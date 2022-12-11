import style from "../../styles/layout/home.module.css"
import React from 'react';
import Link from 'next/link';

export default function menu() {

    return(
        //各div裡面到時候再放資料進去
        <div className={style.userSellIndex_TableContainer}>
            <div className={style.columnContainer}>
                <div className={style.tabletop}>
                    <p>房型</p>
                </div>
                <div className={style.tablemiddle}></div>
                <div className={style.tablebottom1}>
                    <p>總和</p>
                </div>
                <div className={style.tablebottom2}></div>
            </div>

            <div className={style.columnContainer}>
                <div className={style.tabletop}>
                    <p>提供間數</p>
                </div>
                <div className={style.tablemiddle}></div>
                <div className={style.tablebottom1}></div>
                <div className={style.tablebottom2}></div>
            </div>

            <div className={style.columnContainer}>
                <div className={style.tabletop}>
                    <p>售出間數</p>
                </div>
                <div className={style.tablemiddle}></div>
                <div className={style.tablebottom1}></div>
                <div className={style.tablebottom2}></div>
            </div>

            <div className={style.columnContainer}>
                <div className={style.tabletop}>
                    <p>金額</p>
                </div>
                <div className={style.tablemiddle}></div>
                <div className={style.tablebottom1}>
                    <p>107000</p>
                </div>
                <div className={style.tablebottom2}>
                    <p>98%</p>
                </div>
            </div>

            <div className={style.columnContainer}>
                <div className={style.tabletop}>
                    <p>加價金額</p>
                </div>
                <div className={style.tablemiddle}></div>
                <div className={style.tablebottom1}>
                    <p>1000</p>
                </div>
                <div className={style.tablebottom2}>
                    <p>2%</p>
                </div>
            </div>     

            <div className={style.columnContainer}>
                <div className={style.tabletop}  style={{borderRight:0}} >
                    <p>總金額</p>
                </div>
                <div className={style.tablemiddle} style={{borderRight:0}}></div>
                <div className={style.tablebottom1}>
                    <p>108000</p>
                </div>
                <div className={style.tablebottom2}></div>
            </div>       
        </div>

    )
}