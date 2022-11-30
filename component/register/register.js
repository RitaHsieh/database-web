import style from "../../styles/layout/home.module.css"
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/image/logo.png'
import arrow from '../../public/image/arrow.png'

export default function loginform() {
    
    return(
        <>
            <div className={style.loginFormContainer}>
                <Image className={style.logo} src={logo} alt='alter'/>
                <h1 className={style.title}>Register</h1>
                
                <div className={style.button}>
                    <Script src="https://accounts.google.com/gsi/client" async defer />
                    <div id="g_id_onload"
                        data-client_id="278424498443-1su4ostu34uq6m9lqavag4pm8e916pt9.apps.googleusercontent.com"
                        data-login_uri="http://localhost:3000/login"
                        data-auto_prompt="false">
                    </div>
                    <div class="g_id_signin"
                        data-width="280"
                        data-type="standard"
                        data-size="large"
                        data-theme="outline"
                        data-text="sign_in_with"
                        data-shape="rectangular"
                        data-logo_alignment="left"
                        margin-top="30px"
                        margin-left="75px"
                        >
                    </div> 
                </div>
                
                <hr className={style.line}></hr>
            
                <form className={style.form}>
                    <p>
                    <input type="text" name="username" className={style.block} placeholder="username"></input>
                    </p>
                    <p>
                    <input type="text" name="email" className={style.block} placeholder="email"></input>
                    </p>
                    <p>
                    <input type="text" name="password" className={style.block} placeholder="password"></input>
                    </p>
                    <p>
                    <select className={style.block}>
                        <option className={style.option} value="none" selected disabled hidden>性別</option> 
                        <option className={style.option} value="male">男</option> 
                        <option className={style.option} value="female">女 </option> 
                        <option className={style.option} value="other">其他</option> 
                    </select>
                    </p>
                    <p>
                    <input type="text" name="phone" className={style.block} placeholder="phone number"></input>
                    </p>
                </form>

                <hr className={style.line}></hr>
                <Link className={style.button2} href="https://www.youtube.com/watch?v=4JNb4fiT1VA&list=RDV91B6aQOn4k&index=13&ab_channel=%E9%BA%8B%E5%85%88%E7%94%9FMIXER">
                    <Image src={arrow} alt='alter' />
                </Link>
            </div>
        </>
    )
}
