import style from "../../styles/layout/home.module.css"
// import style from "../../styles/layout/home.module.css"

import {useState} from "react"



export default function Title_copy() {



    return (
        <>
            <div className = {style.infoTitleContainer}>
                <div className = {style.titleRightTopContainer}>
                    <br/>
                    <h1 className = {style.title}>旅館名稱</h1>
                    <br/>
                    <div className={style.content}>
                        <p>地址：台北市大安區忠孝東路3段1號</p>
                        <button className = {style.collection}>收藏</button>                        
                    </div>
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
            
        </>
    )
}