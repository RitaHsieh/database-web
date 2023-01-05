import style from "../../styles/layout/home.module.css"
import Script from 'next/script'
import {useState,useEffect} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/image/logo2.png'
import arrow from '../../public/image/304.png'
import useSWR from "swr";
import FormData from 'form-data';
import Cookies from 'js-cookie';

export default function loginform() {

    
    const [account,setAccount] = useState('');
    const [password,setPassword] = useState('');
    const [shouldFetch,setShouldFetch] = useState(false);

    let formData = new FormData();
    formData.append('username', account);
    formData.append('password', password);
    
    const fetcher = (url,formData) => {fetch(url, {
            headers: {
                
            },
            body:formData,
            method: 'POST'
        })
        .then((response) => {
            setShouldFetch(shouldFetch => !shouldFetch);
            return response.json();
        })
        .then( (response) => {
            console.log(response)
            let authToken = response['access_token'];
            Cookies.set('authToken', authToken, { expires: 7 });
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        })
    }
    const buttonClick=()=>{
        setShouldFetch(shouldFetch => !shouldFetch);
    }

    const { data } = useSWR(shouldFetch ? ['https://dhkmj1jao2.execute-api.us-east-1.amazonaws.com/test/auth/login',formData] : null, fetcher)

    const click = () => {
        alert("HI")
        gapi.auth2.init()
        if (auth2.isSignedIn.get()) {
        var profile = auth2.currentUser.get().getBasicProfile();
        console.log('ID: ' + profile.getId());
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
      }
    }
    return(
        <>
            <div className={style.loginFormContainer}>
                <Image className={style.logo} src={logo} alt='alter'/>
                <h1 className={style.title}>Rent You<br></br>on Sunday</h1>
                
                <div className={style.button}>
                    <Script src="https://accounts.google.com/gsi/client" async defer />
                    <div id="g_id_onload"
                        data-client_id="278424498443-1su4ostu34uq6m9lqavag4pm8e916pt9.apps.googleusercontent.com"
                        data-login_uri="/login"
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
                    <div className={style.userinput}>
                        <p>帳號</p>
                        <input type="text" name="acount" className={style.block} placeholder="email or phone number" onChange={event=>{setAccount(event.target.value)}}></input>
                        </div>
                    <div className={style.userinput}>
                        <p>密碼</p>
                        <input type="password" name="password" className={style.block} placeholder="password" onChange={event=>{setPassword(event.target.value)}}></input>
                    </div>
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

                
                <Link href="/register" className={style.link}>
                    <h3 className={style.content}> Register!</h3>
                </Link>
                <button className={style.submit} onClick={buttonClick}><i class="bi bi-arrow-right-circle"></i></button>
                {/* <Image src={arrow} alt='alter' onClick={buttonClick}/> */}
            </div>
        </>
    )
}
