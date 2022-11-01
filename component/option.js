import style from "../styles/option.module.css"


export default function search_result() {
    return(
        <div className={style.container_big}>  
            <a href="http://localhost:3000/home"><img src="logo.png" alt="image" className={style.img}/></a>
            <div className={style.container}>
                <div className={style.container_small}>
                    <button type="button" className={style.button}><p>歷史訂單紀錄</p></button>
                    <button type="button" className={style.button}><p>付款資訊</p></button>
                    <button type="button" className={style.button}><p>收藏紀錄</p></button>
                    <button type="button" className={style.button}><p>隱私設定</p></button>
                </div>
            </div>
        </div>
    )
}
