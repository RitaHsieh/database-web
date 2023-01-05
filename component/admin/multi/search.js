import style from "../../../styles/layout/home.module.css"

export default function Search() {
    return (
        <>
            <div className={style.searchContainer}>
                <div className={style.textBlock}>
                    使用者搜尋系統
                </div>

                <div className={style.formBlock}>
                        <div className={style.idDetail}>
                            <div className={style.detailP}>使用者 Email</div>
                            <input className={style.detailForm} placeholder="請輸入Email"></input>
                        </div>
                        <div className={style.idDetail}>
                            <div className={style.or}>亦可填入</div>
                        </div>
                        <div className={style.idDetail}>
                            <div className={style.detailP}>使用者姓名</div>
                            <input className={style.detailForm} placeholder="請輸入姓名"></input>
                        </div>
                        <div className={style.idDetail}>
                            <div className={style.detailP}>旅館名稱</div>
                            <input className={style.detailForm} placeholder="請輸入旅館"></input>
                        </div>
                </div>
    
                <div className={style.buttonBlock}>
                    <button className={style.button} type="button">搜尋</button>
                </div>
            </div>
        </>
    )
}