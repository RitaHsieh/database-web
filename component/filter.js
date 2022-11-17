import style from "../styles/filter.module.css"

export default function filter(props) {
    return(
        <>
            <div className={props.float===true?style.container:style.containerhidden}>
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

