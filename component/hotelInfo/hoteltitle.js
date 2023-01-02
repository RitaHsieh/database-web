import style from "../../styles/layout/home.module.css"
// import style from "../../styles/layout/home.module.css"




export default function Title_copy(props) {

    console.log(props.name, props.address,props. img)

    return (
        <>
            <div className = {style.infoTitleContainer}>
                <div className = {style.titleTopContainer}>
                    <br/>
                    <h1 className = {style.title}>{props.name}</h1>
                    <br/>
                    <div className={style.content}>
                        <p>地址：{props.address}</p>                   
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