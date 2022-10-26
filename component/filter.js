import style from "../styles/filter.module.css"

export default function filter() {
    return(
        <>
            <div className={style.container}>
                <h1 className={style.title}>類別</h1>
                <hr className={style.line1}></hr>
                <div className={style.optioncontainer}><button className={style.button}/><p>選項</p></div>
                <div className={style.optioncontainer}><button className={style.button}/><p>選項</p></div>
                <div className={style.optioncontainer}><button className={style.button}/><p>選項</p></div>
                <div className={style.optioncontainer}><button className={style.button}/><p>選項</p></div>
                <div className={style.optioncontainer}><button className={style.button}/><p>選項</p></div>
                <hr className={style.line2}></hr>
                
                <button className={style.submit}></button>
            </div>
        </>
    )
}

