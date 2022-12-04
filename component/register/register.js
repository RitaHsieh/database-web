import style from "../../styles/layout/home.module.css"
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react"
import useSWR from "swr"

import logo from '../../public/image/logo2.png'
import arrow from '../../public/image/304.png'


const fetcher = (url,username,email,password,gender,phonenumber) => fetch(url, {
    body: JSON.stringify({  
    "email": email,
    "password": password,
    "name": username,
    "gender": gender,
    "phone": phonenumber,
    "member_type": 0}), 
    method: 'POST'})

export default function loginform() {

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [gender,setGender] = useState('');
    const [phonenumber,setPhonenumber] = useState('');
    const [shouldFetch,setShouldFetch] = useState(false);

    const options = [
        {value: 1 , text: '男'},
        {value: 2 , text: '女'},
        {value: 0 , text: '其他'},
      ];

    const buttonClick=()=>{
        setShouldFetch(shouldFetch => !shouldFetch);
    }



    const { data } = useSWR(shouldFetch ? ['https://dhkmj1jao2.execute-api.us-east-1.amazonaws.com/test/auth/register', username,email,password,gender,phonenumber] : null, fetcher)

    
    return(
        <>
            <div className={style.loginFormContainer}>
                <Image className={style.logo} src={logo} alt='alter'/>
                <h1 className={style.title}>Register</h1>
                
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
                    <p>
                    <input type="text" name="username" className={style.block} placeholder="username" onChange={event=>{setUsername(event.target.value)}}></input>
                    </p>
                    <p>
                    <input type="text" name="email" className={style.block} placeholder="email" onChange={event=>{setEmail(event.target.value)}}></input>
                    </p>
                    <p>
                    <input type="text" name="password" className={style.block} placeholder="password" onChange={event=>{setPassword(event.target.value)}}></input>
                    </p>
                    <p>
                    
                    <select className={style.block} onChange={event=>{setGender(event.target.value)}}> 
                        {options.map(option => (
                            <option className={style.option} key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                    </p>
                    <p>
                    <input type="text" name="phone" className={style.block} placeholder="phone number" onChange={event=>{setPhonenumber(event.target.value)}}></input>
                    </p>
                </form>

                <hr className={style.line}></hr>
                <Image src={arrow} alt='alter' onClick={buttonClick}/>
            </div>
        </>
    )
}
