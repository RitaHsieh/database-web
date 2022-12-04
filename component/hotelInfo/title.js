import style from "../../styles/lee.module.css"
import Filter from "../search/Filter"
import { useState } from "react"

export default function search_section_copy() {

    const [float,setFloat] = useState(false);

    const mask=[style.searchMask,style.searchMaskHidden];


    const btnClick = () => {
        setFloat(float => !float);
    };

    return (
        <>
            <div className={style.searchBottomContainer}>
                <div className={style.bottomleftcontainer}/>
                <div className={style.bottomrightcontainer}>
                <div className={style.bottomrightcontainer_ex2}>
                    <h1 className={style.title}>旅館名稱</h1>
                    <br/>
                    <p>地址：台北市大安區忠孝東路3段1號</p>
                    <div className={style.collection}>收藏</div>
                </div>
                    <div className={style.bottomrightcontainer_ex}>
                        <div className={style.bottomrightpicture}/>
                        <div className={style.bottomrightpicture2}/>
                        <div className={style.bottomrightpicture3}/>
                        <div className={style.bottomrightpicture4}/>
                        <div className={style.bottomrightpicture5}/>
                        <div className={style.bottomrightpicture6}/>
                    </div>
                </div>
            </div>
                
            <div className={float===true?mask[0]:mask[1]} onClick={event=>btnClick()}></div>
            <Filter float={float===true?0:1}/>

        </>
    )
}