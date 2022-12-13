import style from "../../../styles/layout/home.module.css"

export default function information() {

    return (
        <>
        
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
        
        </>
    )

}