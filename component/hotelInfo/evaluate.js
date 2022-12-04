import style from "../../styles/layout/home.module.css"

export default function evaluate() {

    return (
        <>
        
        <div className={style.hotelInfoEvaluate}>
            <h1 className={style.title}>評論及評價</h1>
            <nobr className={style.evaluate_gradenumber}>8.7</nobr><nobr className={style.evaluate_grade}>分</nobr>
            <div className={style.container}>
                <div className={style.evaluatecontainer}>
                    <div className={style.imgname}>
                        <img className={style.circle}></img>
                        <nobr className={style.name}>用戶名稱</nobr>
                    </div>
                    <div className={style.evaluatecontainergray}>
                        <p className={style.name}>&#128512;好評</p>
                    </div>
                    <p className={style.name}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                </div>
                <div className={style.evaluatecontainer}>
                    <div className={style.imgname}>
                        <img className={style.circle}></img>
                        <nobr className={style.name}>用戶名稱</nobr>
                    </div>
                    <div className={style.evaluatecontainergray}>
                        <p className={style.name}>&#128512;好評</p>
                    </div>
                    <p className={style.name}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                </div>
                <div className={style.evaluatecontainer}>
                    <div className={style.imgname}>
                        <img className={style.circle}></img>
                        <nobr className={style.name}>用戶名稱</nobr>
                    </div>
                    <div className={style.evaluatecontainergray}>
                        <p className={style.name}>&#128512;好評</p>
                    </div>
                    <p className={style.name}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                </div>
                <button className={style.addcomment}><i class="bi bi-plus"></i></button>
            </div>
        </div>
        
        </>
    )

}