import style from "../../styles/leecopy.module.css"
import Searchform_2 from "../search/Searchform-2"
import logo from '../../public/image/logo2.png'
import Image from 'next/image';



export default function Title_copy() {

    return (
        <>
            <div className = {style.infoTitleContainer}>
                <div className = {style.titleLeftContainer}>
                    <div className = {style.titleLeftTopContainer}>
                        <div className = {style.titleLeftTopTopContainer}/>
                        <Image className={style.logo} src={logo} alt='alter'/>
                    </div>
                    <Searchform_2/>
                </div>
                <div className = {style.titleRightContainer}>
                    <div className = {style.titleRightTopContainer}>
                        <div className = {style.titleRightTopWordContainer}>
                            <br/>
                            <h1>旅館名稱</h1>
                            <br/>
                            <p>地址：台北市大安區忠孝東路3段1號</p>
                            <div className = {style.collection}>
                                <h3>收藏</h3>
                            </div>
                        </div>
                    </div>
                    <div className = {style.titleRightBottomContainer}>
                        <div className = {style.pictureBoard}>
                            <div className = {style.leftBoard}>
                                <div className = {style.pictureType1}/>
                                <div className = {style.pictureType1}/>
                                <div className = {style.pictureType1}/>
                            </div>
                            <div className = {style.rightBoard}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}