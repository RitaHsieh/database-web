import style from "../styles/loginform.module.css"

export default function loginform() {
    return(
        <>
            
            <div className={style.background}>
                <img className={style.logo} src="logo.jpg" alt='alter'/>
                <h1 className={style.title}>Rent You<br></br>on Sunday</h1>
                <script src="https://accounts.google.com/gsi/client" async defer></script>
                <div id="g_id_onload"
                    data-client_id="YOUR_GOOGLE_CLIENT_ID"
                    data-login_uri="https://your.domain/your_login_endpoint"
                    data-auto_prompt="false">
                </div>
                <div className="g_id_signin"
                    data-type="standard"
                    data-size="large"
                    data-theme="outline"
                    data-text="sign_in_with"
                    data-shape="rectangular"
                    data-logo_alignment="left">
                </div> 
                <hr className={style.line1}></hr>
            
                <form className={style.form}>
                    <input type="text" name="acount" className={style.block} placeholder="email address or phone number"></input>
                    
                    <input type="text" name="password" className={style.block} placeholder="password"></input>
            
                    <input type="checkbox" id="remember-account" value="remember-account"></input>
                    <label for="remember-account" className={style.checkbox}>Remember account for 30 days.</label>
                   
                </form>
                <hr className={style.line2}></hr>
                <h3 className={style.content}>Don't have an accout?</h3>
                <a className={style.link} href="https://www.youtube.com/shorts/-hNK5kKW6HY">
                    <h3 className={style.content}> Register!</h3>
                </a>
                <button className={style.button2}></button>

            </div>
        </>
    )
}
