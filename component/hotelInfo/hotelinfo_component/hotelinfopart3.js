import style from "../../../styles/layout/home.module.css"

export default function hotelinfopart3() {

    return (
        <>
            <div className={style.hotelInfoEvaluate}>
                <h1 className={style.title}>評論及評價</h1>
                <nobr className={style.evaluate_gradenumber}>8.7</nobr><nobr className={style.evaluate_grade}>分</nobr>
            </div>

            <div className={style.hotelInfoAttraction}>
                <h1 className={style.title}>熱門景點</h1>
                <div className={style.attraction}>
                    <div className={style.attractionDetailB}>
                        <p className={style.name}>熱門景觀</p>
                    </div>
                    <div className={style.attractionDetailB}>
                        <p className={style.name}>自然景觀</p>
                    </div>
                    <div className={style.attractionDetailB}>
                        <p className={style.name}>人文景點</p>
                    </div>
                    <div className={style.attractionDetailS}>
                        <p className={style.name}>其他</p>
                    </div>
                </div>
            </div>

            <div className={style.hotelInfoInformation}>
                <h1 className={style.title}>入住須知</h1>
                <div className={style.searchcontainer}>
                    <div className={style.searchcontainerALL}>
                        <div className={style.searchcontainerTitle}>
                            <p className={style.name}>入住時間</p>
                        </div>
                        <div className={style.searchcontainerName}>
                            <p className={style.name}>XXX</p>
                        </div>
                    </div>

                    <div className={style.searchcontainerALL}>
                        <div className={style.searchcontainerTitle}>
                            <p className={style.name}>退房時間</p>
                        </div>
                        <div className={style.searchcontainerName}>
                            <p className={style.name}>XXX</p>
                        </div>
                    </div>

                    <div className={style.searchcontainerALL}>
                        <div className={style.searchcontainerTitle}>
                            <p className={style.name}>訂金/退訂政策</p>
                        </div>
                        <div className={style.searchcontainerName}>
                            <p className={style.name}>XXX</p>
                        </div>
                    </div>

                    <div className={style.searchcontainerALL}>
                        <div className={style.searchcontainerTitle}>
                            <p className={style.name}>吸菸管制</p>
                        </div>
                        <div className={style.searchcontainerName}>
                            <p className={style.name}>XXX</p>
                        </div>
                    </div>

                    <div className={style.searchcontainerALL}>
                        <div className={style.searchcontainerTitle}>
                            <p className={style.name}>孩童加床選項</p>
                        </div>
                        <div className={style.searchcontainerName}>
                            <p className={style.name}>XXX</p>
                        </div>
                    </div>

                    <div className={style.searchcontainerALL}>
                        <div className={style.searchcontainerTitle}>
                            <p className={style.name}>寵物</p>
                        </div>
                        <div className={style.searchcontainerName}>
                            <p className={style.name}>XXX</p>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className={style.hotelInfoTransportation}>
                <h1 className={style.title}>交通</h1>
                <p className={style.name}>XXX</p>
            </div>
        </>
    )
}