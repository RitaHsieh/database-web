import style from "../styles/Section.module.css"

export default function Section() {
    return(
        <>
            <div className={style.herocontainer}>
                <img className={style.background} src="background.jpg" alt='alter'/>
                <h1>Rent You on Sunday</h1>
                <div className="search-box"></div>
                    
                    
            </div>
        </>
    )
}