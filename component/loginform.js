import style from "../styles/loginform.module.css"
import {useState,useEffect} from 'react'

export default function loginform() {
    return(
        <>
            
            
            <div className={style.background}>
                <img className={style.logo} src="logo.png" alt='alter'/>
                <h1 className={style.title}>Rent You<br></br>on Sunday</h1>
                <script src="https://accounts.google.com/gsi/client" async defer></script>
                
                {/* <div id="g_id_onload"
                    data-client_id="278424498443-1su4ostu34uq6m9lqavag4pm8e916pt9.apps.googleusercontent.com"
                    data-auto_select="true"
                    data-login_uri="http://localhost:3000/login">
                </div> */}
                
                <div class="g_id_signin"
                    data-type="standard"
                    data-size="large"
                    data-theme="outline"
                    data-text="sign_in_with"
                    data-shape="rectangular"
                    data-logo_alignment="left">
                </div> 
                <hr className={style.line1}></hr>
            
                <form className={style.form}>
                    <p>
                    <input type="text" name="acount" className={style.block} placeholder="email address or phone number"></input>
                    </p>
                    <p>
                    <input type="text" name="password" className={style.block} placeholder="password"></input>
                    </p>
                    <p>
                    <input type="checkbox" id="remember-account" value="remember-account" className={style.checkbox}></input>
                    <label for="remember-account" className={style.chcontent}>Remember account for 30 days.</label>
                    </p>
                </form>
                <a className={style.link} href="https://www.youtube.com/shorts/-hNK5kKW6HY">
                    <h3 className={style.content}>Forgot your password?</h3>
                </a>
                <hr className={style.line2}></hr>
                <h3 className={style.content}>Don't have an accout?</h3>
                <a className={style.link} href="https://www.youtube.com/shorts/-hNK5kKW6HY">
                    <h3 className={style.content}> Register!</h3>
                </a>
                <a className={style.button2} href="https://www.youtube.com/watch?v=4JNb4fiT1VA&list=RDV91B6aQOn4k&index=13&ab_channel=%E9%BA%8B%E5%85%88%E7%94%9FMIXER">
                    <img src="arrow.png" alt='alter'/>
                </a>
                {/* <button className={style.button2}></button> */}

            </div>
        </>
    )
}
