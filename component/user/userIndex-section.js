import Setting from "./Setting"
import Option from "./option"
import style from "../../styles/layout/home.module.css"

export default function account() {
    return (
        <div className={style.userIndexSectionContainer}>

            <Setting/>
            <div className={style.columnContainer}>
                <a href="http://localhost:3000/home"><img src="logo.png" alt="image" /></a>
                <Option/>
            </div>
            
            
        </div>
    )
}