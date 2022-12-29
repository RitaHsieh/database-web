import style from "../../styles/layout/home.module.css"
// import style from "../../styles/layout/home.module.css"




export default function Title_copy() {



    return (
        <>
            <div className = {style.infoTitleContainer}>
                <div className = {style.titleTopContainer}>
                    <br/>
                    <h1 className = {style.title}>旅館名稱</h1>
                    <br/>
                    <div className={style.content}>
                        <p>地址：台北市大安區忠孝東路3段1號</p>                   
                    </div>
                </div>
                <div className = {style.titleBottomContainer}>
                    <div className={style.img}>
                        {/* <Image></Image> */}
                    </div>
                    <div className={style.icon}>
                        <i class="bi bi-plus-circle"></i>
                    </div>
                </div>
            </div>
            
        </>
    )
}