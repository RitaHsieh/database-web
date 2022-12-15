import style from "../../styles/layout/home.module.css"
import Searchform_2 from "../search/Searchform-2"
import logo from '../../public/image/logo2.png'
import Image from 'next/image';
// import style from "../../styles/layout/home.module.css"

import {useState} from "react"



export default function Title_copy() {

    const [float,setFloat] = useState(false);

    const mask=[style.searchMask,style.searchMaskHidden];


    const btnClick = () => {
        setFloat(float => !float);
    };

    return (
        <>
            <div className = {style.infoTitleContainer}>
                <div className = {style.titleLeftContainer}>
                    <Image className={style.logo} src={logo} alt='alter'/>
                    <Searchform_2/>
                    <button className={style.btnfilter} onClick={btnClick}>篩選</button>
                </div>
                <div className = {style.titleRightContainer}>
                    <div className = {style.titleRightTopContainer}>
                        <br/>
                        <h1 className = {style.title}>旅館名稱</h1>
                        <br/>
                        <p>地址：台北市大安區忠孝東路3段1號</p>
                        <button className = {style.collection}>收藏</button>
                    </div>
                    <div className = {style.titleRightBottomContainer}>
                        <div className = {style.leftBoard}>
                            <div className = {style.pictureType1}/>
                            <div className = {style.pictureType1}/>
                            <div className = {style.pictureType1}/>
                        </div>
                        <div className = {style.rightBoard}>
                            <div className = {style.rightTopBoard}/>
                            <div className = {style.rightBottomBoard}/>
                            <div className = {style.rightBottomBoard}/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}