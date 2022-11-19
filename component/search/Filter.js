import style from "../../styles/layout/home.module.css"

export default function filter({float}) {
    const container=[style.searchFilterContainer,style.containerhidden];
    return(
        <>
            <div className={container[float]}>
                <h2 className={style.title}>類別</h2>
                <hr className={style.line}></hr>
                <div className={style.optioncontainer}><button className={style.button}><span>選項 </span></button></div>
                <div className={style.optioncontainer}><button className={style.button}><span>選項 </span></button></div>
                <div className={style.optioncontainer}><button className={style.button}><span>選項 </span></button></div>
                <div className={style.optioncontainer}><button className={style.button}><span>選項 </span></button></div>
                <div className={style.optioncontainer}><button className={style.button}><span>選項 </span></button></div>
                <hr className={style.line}></hr>
                
                <button className={style.submit}><span>Next</span></button>
            </div>
        </>
    )
}

