import style from "../../styles/layout/home.module.css"
import React from 'react';
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link';
import Cookies from "js-cookie";
import useSWR from "swr";


export default function menu() {

    
    const authToken = Cookies.get('authToken');

    const matches = useMediaQuery({
        query: '(max-width: 960px)'
      });

    const get_fetcher = (url) => 
        fetch(url, {headers: {
            'content-type': 'application/json',
            'Authorization': "Bearer " + authToken,
        }}) //+ '?' + ( new URLSearchParams( hotel_id ) ).toString())
        .then(response => response.json());
    

    const { data, error } = useSWR('https://dhkmj1jao2.execute-api.us-east-1.amazonaws.com/test/member/info', get_fetcher);
    
    return(

        <div className={style.userMultiMenuContainer}>  
             <div className={style.title}>
                {/* <i class="bi bi-gear-fill"></i> */}
                <i class="bi bi-gear"></i>
                <h1>設定</h1>
             </div>
            {data?
             <div className={matches?style.smoptions:style.options}>

                <Link className={style.button} href="history">
                <i class="bi bi-receipt"></i>
                <p>歷史訂單</p>
                </Link>
                <Link className={style.button} href="payment">
                <i class="bi bi-credit-card"></i>
                <p>付款資訊</p>
                </Link>
                <Link className={style.button} href="collection">
                <i class="bi bi-bag-heart"></i>
                <p>收藏紀錄</p>
                </Link>
                <Link className={style.button} href="privacysetting">
                <i class="bi bi-shield-lock"></i>
                <p>隱私設定</p>
                </Link>
                {console.log("data: s")}
                {console.log(data)}
                <hr className={(data.member_type=="1")?Null: style.hide}></hr>
                <Link className={(data.member_type=="1")?style.button:style.hide} href="">
                <i class="bi bi-ticket-perforated-fill"></i>
                <p>優惠活動</p>
                </Link>
                <Link className={(data.member_type=="1")?style.button:style.hide} href="/user/hotel/">
                <i class="bi bi-house"></i>
                <p>旅館管理</p>
                </Link>
                <Link className={(data.member_type=="1")?style.button:style.hide} href="/user/sell/">
                <i class="bi bi-ui-checks-grid"></i>
                <p>銷售管理</p>
                </Link>
             </div>:<></>
             }
        </div>
    )
}