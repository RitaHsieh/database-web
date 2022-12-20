import style from "../../styles/layout/home.module.css"
import React from 'react';
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link';

export default function menu() {
    const matches = useMediaQuery({
        query: '(max-width: 960px)'
      })
    return(
        <div className={style.userMultiMenuContainer}>  
             <div className={style.title}>
                {/* <i class="bi bi-gear-fill"></i> */}
                <i class="bi bi-gear"></i>
                <h1>設定</h1>
             </div>
             <div className={matches?style.smoptions:style.options}>
                <Link className={style.button} href="">
                <i class="bi bi-receipt"></i>
                <p>歷史訂單</p>
                </Link>
                <Link className={style.button} href="">
                <i class="bi bi-credit-card"></i>
                <p>付款資訊</p>
                </Link>
                <Link className={style.button} href="">
                <i class="bi bi-bag-heart"></i>
                <p>收藏紀錄</p>
                </Link>
                <Link className={style.button} href="">
                <i class="bi bi-shield-lock"></i>
                <p>隱私設定</p>
                </Link>
                <hr></hr>
                <Link className={style.button} href="">
                <i class="bi bi-house"></i>
                <p>旅館管理</p>
                </Link>
                <Link className={style.button} href="/user/sell/">
                <i class="bi bi-ui-checks-grid"></i>
                <p>銷售管理</p>
                </Link>
             </div>
        </div>
    )
}