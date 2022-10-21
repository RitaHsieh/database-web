import style from "../styles/Section.module.css"
import Search from "../component/searchform"
import Login from "../component/login"

export default function Section({event}) {
    return(
        <>
                <div className={style.herocontainer}>
                    <img className={style.background} src="background.jpg" alt='alter'/>
                    <h1>Rent You on Sunday</h1>
                    <Search/>
                    <Login/>
                    <button className={`${style.button} ${style.scrollindicator}`} onClick={event}>
                        <span className={style.scrollindicatorlabel}>introduction</span> 
                        <div className={style.scrollindicatorline}></div>
                    </button>
            </div>
        </>
    )
}