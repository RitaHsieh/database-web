import style from "../../styles/layout/home.module.css"


export default function loginform() {
    return(
        <>
            
            <select className={style.searchOrderContainer} name="order" id="order"> 
                <option className={style.option} value="none" selected disabled hidden>排序方式</option> 
                <option className={style.option} value="price">價錢</option> 
                <option className={style.option} value="stars">星級 </option> 
                <option className={style.option} value="distance">距離</option> 
            </select>
        </>
    )
}
