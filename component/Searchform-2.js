import style from "../styles/Searchform_2.module.css"

export default function Searchform_2(){
    return (
        <>
            <div className={style.container}>
                <input className={style.first} placeholder="地點"></input>
                <select className={style.second}>
                    <option selected disabled hidden>人數</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <input className={style.first} placeholder="出發時間"></input>
                <input className={style.first} placeholder="抵達時間"></input>
                <button className={style.btn}><span>篩選 →</span></button>
            </div>
        </>
    )
}