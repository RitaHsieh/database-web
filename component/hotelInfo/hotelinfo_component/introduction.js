import style from "../../../styles/layout/home.module.css"

export default function introduction() {

    return (
        <>
            <div className={style.hotelInfoIntroduction}>
                <p className={style.title}>旅館特色簡介</p>
                <p className={style.content}>旅館的簡介</p>
                
                <p className={style.s_title}>熱門設施</p>
                <div className={style.block}>
                    <p>first</p>
                    <p>second</p>
                </div>
                
                <p className={style.s_title}>熱門景點</p>
                <div className={style.block}>
                    <p>first</p>
                    <p>second</p>
                </div>
            </div>
        </>
    )
}