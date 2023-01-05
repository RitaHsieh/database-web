import style from "../../../styles/layout/home.module.css"
import Link from 'next/link';
import Image from 'next/image'
import logo from '../../../public/image/logo2.png'
import { useState } from "react";

export default function UserAccess() {

    const css = [style.hidden,style.appear];
    const [type,setType] = useState("left");
    const left_authClick=()=>{
        setType("left");
    }
    const right_authClick=()=>{
        setType("right");
    }
    return (
        <>
            <div className={style.UserAccessContainer}>
                <div className={style.top}>
                    <div className={style.switch}>
                        {/* 要再改連結 */}
                        <button className={style.innerbutton} type="button"><Link href="/user/sell/">單一房屋狀態</Link></button>
                        <div className={style.buttonwhite}><p className={style.buttontext}>權限調整</p></div>
                    </div>
                </div>
                <div className={style.middle}>
                    <div className={style.middleBlock}>
                        <div className={style.userNameBlock}>
                            <div className={style.imageContainer}>
                                <div className={style.imageUserFrame}>
                                    <Image className={style.logo} src={logo} alt='alter'/>
                                </div>
                            </div>
                            <div className={style.textFrame}>
                                <p className={style.user}>使用者姓名</p>
                                <div className={style.space}></div>
                                <p className={style.email}>使用者email</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.bottom}>
                    <div className={style.accessBlock}>使用者權限：</div>
                    <div className={style.or}>or</div>
                    <div className={style.stopBlock}>永久停權：</div>
                    <div className={style.confirm}>確認</div>
                </div>
                <button className={type=="left"?css[1]:css[0]} onClick={left_authClick}></button>
                <button className={type=="right"?css[1]:css[0]} onClick={right_authClick}></button>
            </div>
        </>
    )
}