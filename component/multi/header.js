import style from "../../styles/layout/home.module.css";
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/image/logo2.png'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import {useState} from 'react';

export default function header() {
    const[login, setLogin]=useState();

    const [loginFloat, setLoginFloat]=useState(true);

    const daypicker=[style.daypicker,style.daypicker1];
    const mask=[style.mask,style.mask1];

    const loginOnClick = () => {
        setLoginFloat(loginFloat => !loginFloat);
    };

    return (
        <>
        
            <div className={style.searchTopContainer}>
                <p className={style.text}>Rent You on Sunday</p>
                <div className={style.loginbt}>
                    <button onClick={event => loginOnClick()} className={style.humanicon}><i class="bi bi-person-circle"></i></button>
                    <div className={loginFloat? style.hide:style.menu}>
                        <Link href="/login" className={login?style.hide:style.display}> 登入</Link>
                        <Link href="/register" className={login?style.hide:style.display}> 註冊</Link>
                        <Link href="/user" className={login?style.display:style.hide}> 個人頁面</Link>
                        <Link href="/" className={login?style.display:style.hide}> 登出</Link>
                    </div>
                </div>
                {/* <Menu menuButton={
                    <MenuButton className={style.loginbt}><i class="bi bi-person-circle"></i></MenuButton>} 
                    menuClassName={style.menu}>
                    <MenuItem className={login?style.hide:style.display}>登入</MenuItem>
                    <MenuItem className={login?style.hide:style.display}>註冊</MenuItem>

                    <MenuItem className={login?style.display:style.hide}>個人頁面</MenuItem>
                    <MenuItem className={login?style.display:style.hide}>登出</MenuItem>
                </Menu> */}
                <Link href="/"><Image className={style.logo} src={logo} alt='alter'/></Link>
            </div>
          
            
        </>
    )
}