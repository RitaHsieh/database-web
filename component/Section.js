import style from "../styles/Section.module.css"

export default function Section() {
    return(
        <>
            <div className={style.herocontainer}>
                <img className={style.background} src="background.jpg" alt='alter'/>
            </div>
        </>
    )
}