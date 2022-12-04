import style from "../../styles/layout/home.module.css"

export default function attraction() {

    return (
        <>
        
        <div className={style.hotelInfoAttraction}>
            <h1 className={style.title}>熱門景點</h1>
            <div className={style.attraction}>
                <div className={style.attractionDetail}>
                    <p className={style.subtitle}>熱門景觀</p>
                    <div className={style.containerB}>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                    </div>
                </div>
                <div className={style.attractionDetail}>
                    <p className={style.subtitle}>自然景觀</p>
                    <div className={style.containerB}>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                    </div>
                </div>
                <div className={style.attractionDetail}>                        
                    <p className={style.subtitle}>人文景點</p>
                    <div className={style.containerB}>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                    </div>
                </div>
                <div className={style.attractionDetail}>
                    <p className={style.subtitle}>其他</p>
                    <div className={style.containerS}>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )

}