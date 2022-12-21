import style from "../../styles/layout/home.module.css"


export default function Searchform_2(){

    const btnClick = () => {
        setFloat(float => !float);
    };
    
    return (
        <>
            <div className={style.searchSearchformContainer}>
                <input className={style.item} placeholder="地點"></input>
                <select className={style.item}>
                    <option selected disabled hidden>人數</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <input className={style.item} placeholder="出發時間"></input>
                <input className={style.item} placeholder="抵達時間"></input>
                <button className={style.btn}><span>搜尋 →</span></button>
                <button className={style.btnfilter} onClick={btnClick}>篩選</button>
            </div>
        </>
    )
}