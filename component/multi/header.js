import style from "../../styles/layout/home.module.css";
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/image/logo2.png'
// import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import {useState} from 'react';
import useSWR from "swr";
import Cookies from "js-cookie";

export default function header() {
    // const[login, setLogin]=useState();
    const authToken = Cookies.get('authToken');
    console.log(authToken);

    const get_fetcher = (url) => 
        fetch(url,{
            headers: {
                'content-type': 'application/json',
                'Authorization': "Bearer " + authToken,
            }
        })
        .then(response => response.json())
    
    const { data, error } = useSWR('https://dhkmj1jao2.execute-api.us-east-1.amazonaws.com/test/auth/user', get_fetcher);
    

    const [loginFloat, setLoginFloat]=useState(true);

    const daypicker=[style.daypicker,style.daypicker1];
    const mask=[style.mask,style.mask1];

    const loginOnClick = () => {
        setLoginFloat(loginFloat => !loginFloat);
    };
    const logout = () => {
        Cookies.remove('authToken');
    }
    

    return (
        <>
        {
            (data || error)?
            <div className={style.searchTopContainer}>
                {console.log("data")}
                {console.log(data, error)}
                <p className={style.text}>Rent You on Sunday</p>
                <div className={style.loginbt}>
                    <button onClick={event => loginOnClick()} className={style.humanicon}><i class="bi bi-person-circle"></i></button>
                    <div className={loginFloat? style.hide:style.menu}>
                        <Link href="/login" className={data["detail"]?style.display:style.hide}> 登入</Link>
                        <Link href="/register" className={data["detail"]?style.display:style.hide}> 註冊</Link>
                        <Link href="/user" className={data["detail"]?style.hide:style.display}> 個人頁面</Link>
                        <Link href="/" className={data["detail"]?style.hide:style.display} onClick={e=>logout()}>登出</Link>
                    </div>
                </div>
                <Link href="/"><Image className={style.logo} src={logo} alt='alter'/></Link>
            </div>
            :<></>
        }
           
        </>
    )
}