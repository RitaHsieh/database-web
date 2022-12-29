import Menu from "../menu"
// import Option from "./option"
import style from "../../../styles/layout/home.module.css"
import {useState,useEffect} from "react"
export default function account() {
    
    const [changing, setChanging] = useState(true);
    
    
    const dosth = () => {
        setChanging(changing => !changing);
    };
    return (
        <>
        
            <div className={style.searchTopContainer}>
                <p className={style.text}>Rent You on Sunday</p>
            </div>
            <div className={style.userPaymentButtonContainer}>
                <Menu/>
                
                <div className={style.userinfoblock}>
                    <div className={style.tilte}><h1>付款資訊</h1></div>
                    <div className={style.usersetting}>
                    <p>安全新增或移除付款方式，讓訂房更方便。</p>
                    </div>

                    {/* <div className={style.userinfo}>
                        <button className={style.changeinfo} onClick={event=>dosth()}>{changing?"Yes":"No"}</button>
                    </div> */}
                </div>
                
            </div>
        </>
    )
}