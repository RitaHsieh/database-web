import style from "../../../../styles/layout/home.module.css"

export default function hotelinfo() {

    return (
        <>
            <div className={style.hotelInfoBookContainer}>
                <div className={style.right_container}><button type="button" className={style.button}>立即訂房</button></div>
            </div>
        </>
    )
}