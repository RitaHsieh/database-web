import style from "../../../styles/layout/home.module.css"
import Image from 'next/image'
import logo from '../../../public/image/logo2.png'

export default function houseDetail() {

    return (
        <>
            <div className={style.UserDetailContainer}>
                <div className={style.whiteBlock}>
                    <div className={style.left}>

                        <div className={style.userNameBlock}>
                            <div className={style.imageContainer}>
                                <div className={style.imageHouseFrame}>
                                    <Image className={style.logo} src={logo} alt='alter'/>
                                </div>
                            </div>
                            <div className={style.textFrame}>
                                <p className={style.user}>房屋名稱</p>
                                <div className={style.space}></div>
                                <p className={style.email}>持有者姓名</p>
                            </div>
                        </div>

                        <div className={style.userInfoBlock}>
                            <div className={style.row}>
                                <div className={style.text}>房屋地址：地址</div>
                                <div className={style.text}>租屋次數：數量</div>
                            </div>
                            <div className={style.row}>
                                <div className={style.text}>房屋市話：電話</div>
                                <div className={style.text}>綜合星級：星級</div>
                            </div>
                            <div className={style.row}>
                                <div className={style.text}>註冊日期：日期</div>
                                <div className={style.text}>被檢舉數：數量</div>
                            </div>

                        </div>

                    </div>


                    <div className={style.right}>
                        <button type="button" className={style.button}><p>房屋下架</p></button>
                        <button type="button" className={style.button}><p>屋主資訊</p></button>
                    </div>
                </div>
            </div>
        </>
    )
}