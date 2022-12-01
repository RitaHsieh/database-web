import style from "../../styles/layout/home.module.css"

export default function attraction() {

    return (
        <>
        
        <div className={style.hotelInfoAttraction}>
            <h1 className={style.title}>熱門景點</h1>
            <div className={style.attraction}>
                <div className={style.attractionDetailB}>
                    <p className={style.name}>熱門景觀</p>
                    <div className={style.containerB}>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                    </div>
                </div>
                <div className={style.attractionDetailB}>
                    <p className={style.name}>自然景觀</p>
                    <div className={style.containerB}>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                    </div>
                </div>
                <div className={style.attractionDetailB}>                        
                    <p className={style.name}>人文景點</p>
                    <div className={style.containerB}>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                        <div><p className={style.name}>XXXX</p></div>
                    </div>
                </div>
                <div className={style.attractionDetailS}>
                    <p className={style.name}>其他</p>
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