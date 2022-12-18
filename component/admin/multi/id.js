import style from "../../../styles/layout/home.module.css"
import Image from 'next/image'
import logo from '../../../public/image/logo2.png'

export default function ID() {
    return (
        <>
            <div className={style.idContainer}>
                <div className={style.idBlock}>
                    
                    <div className={style.idTitle}><p>管理員識別證</p></div>

                    <div className={style.idImageContainer}>
                        <div className={style.imageFrame}>
                            <Image className={style.logo} src={logo} alt='alter'/>
                        </div>
                    </div>

                    <div className={style.idDetailContainer}>
                        <div className={style.idDetail}>
                            <div className={style.detailP}>管理員ID</div>
                            <input className={style.detailForm} placeholder="請輸入ID"></input>
                        </div>
                        <div className={style.idDetail}>
                            <div className={style.detailP}>管理員姓名</div>
                            <input className={style.detailForm} placeholder="請輸入姓名"></input>
                        </div>
                        <div className={style.idDetail}>
                            <div className={style.detailP}>管理員權限</div>
                            <input className={style.detailForm} placeholder="請輸入權限"></input>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}