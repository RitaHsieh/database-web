import style from "../../../styles/layout/home.module.css"
import Image from 'next/image'
import logo from '../../../public/image/logo2.png'

export default function UserDetail() {

    return (
        <>
            <div className={style.UserDetailContainer}>
                <div className={style.whiteBlock}>
                    <div className={style.left}>

                        <div className={style.userNameBlock}>
                            <div className={style.imageContainer}>
                                <div className={style.imageUserFrame}>
                                    <Image className={style.logo} src={logo} alt='alter'/>
                                </div>
                            </div>
                            <div className={style.textFrame}>
                                <p className={style.user}>使用者姓名</p>
                                <div className={style.space}></div>
                                <p className={style.email}>使用者email</p>
                            </div>
                        </div>

                        <div className={style.userInfoBlock}>
                            <div className={style.row}>
                                <div className={style.text}>電話號碼：電話</div>
                                <div className={style.text}>帳號權限：權限</div>
                            </div>
                            <div className={style.row}>
                                <div className={style.text}>出生日期：生日</div>
                                <div className={style.text}>持有屋數：數量</div>
                            </div>
                            <div className={style.row}>
                                <div className={style.text}>聯絡地址：地址</div>
                                <div className={style.text}>評論次數：數量</div>
                            </div>
                            <div className={style.row}>
                                <div className={style.text}>性別：性別</div>
                                <div className={style.text}>被檢舉數：數量</div>
                            </div>
                        </div>

                    </div>


                    <div className={style.right}>
                        <button type="button" className={style.button}><p>歷史訂單</p></button>
                        <button type="button" className={style.button}><p>LOG紀錄</p></button>
                    </div>
                </div>
            </div>
        </>
    )
}