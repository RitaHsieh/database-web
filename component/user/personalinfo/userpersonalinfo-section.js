import Menu from "../menu"
// import Option from "./option"
import style from "../../../styles/layout/home.module.css"

export default function account() {
    return (
        <>
            <div className={style.searchTopContainer}>
                <p className={style.text}>Rent You on Sunday</p>
            </div>
            <div className={style.userPersonalInfoButtonContainer}>
                <div className={style.buttonleftcontainer}>
                    <Menu/>
                </div>
                
                <div className={style.usersetting}>
                    <p>:)</p>
                </div>
            </div>
        </>
    )
}