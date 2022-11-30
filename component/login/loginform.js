import style from "../../styles/layout/home.module.css"
import Script from 'next/script'
import {useState,useEffect} from 'react'
import Link from 'next/link';
import Image from 'next/image';


export default function loginform() {

    const [account,setAccount] = useState();
    const [password,setPassword] = useState();
    
    return(
        <>
            <div className={style.loginFormContainer}>
                <img className={style.logo} src="logo.png" alt='alter'/>
                <h1 className={style.title}>Rent You<br></br>on Sunday</h1>
                
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
                    <input type="text" name="acount" className={style.block} placeholder="email address or phone number" onChange={event=>{setAccount(event.target.value)}}></input>
                    </p>
                    <p>
                    <input type="text" name="password" className={style.block} placeholder="password" onChange={event=>{setPassword(event.target.value)}}></input>
                    </p>
                    <p>
                    <input type="checkbox" id="remember-account" value="remember-account" className={style.checkbox}></input>
                    <label for="remember-account" className={style.chcontent}> Remember account for 30 days.</label>
                    </p>
                </form>
                <Link className={style.link} href="https://www.youtube.com/shorts/-hNK5kKW6HY">
                    <h3 className={style.content}> Forgot your password?</h3>
                </Link>
                <hr className={style.line}></hr>
                <h3 className={style.content}>Don't have an accout?</h3>
                <Link className={style.link} href="https://www.youtube.com/shorts/-hNK5kKW6HY">
                    <h3 className={style.content}> Register!</h3>
                </Link>
                <Link className={style.button2} href="https://www.youtube.com/watch?v=4JNb4fiT1VA&list=RDV91B6aQOn4k&index=13&ab_channel=%E9%BA%8B%E5%85%88%E7%94%9FMIXER">
                    <img src="arrow.png" alt='alter'/>
                </Link>
            </div>
        </>
    )
}
