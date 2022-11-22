import style from "../../styles/layout/home.module.css"


export default function menu() {
    return(
        <div className={style.userMultiMenuContainer}>  
             <div className={style.title}>
                {/* <i class="bi bi-gear-fill"></i> */}
                <i class="bi bi-gear"></i>
                <h1>設定</h1>
             </div>
             <div className={style.options}>
                <a className={style.button}>
                <i class="bi bi-receipt"></i>
                <p>歷史訂單</p>
                </a>
                <a className={style.button}>
                <i class="bi bi-credit-card"></i>
                <p>付款資訊</p>
                </a>
                <a className={style.button}>
                <i class="bi bi-bag-heart"></i>
                <p>收藏紀錄</p>
                </a>
                <a className={style.button}>
                <i class="bi bi-shield-lock"></i>
                <p>隱私設定</p>
                </a>
                <hr></hr>
                <a className={style.button}>
                <i class="bi bi-house"></i>
                <p>旅館管理</p>
                </a>
                <a className={style.button}>
                <i class="bi bi-ui-checks-grid"></i>
                <p>銷售管理</p>
                </a>
             </div>
        </div>
    )
}