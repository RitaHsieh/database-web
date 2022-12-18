import style from "../../../styles/layout/home.module.css"
import Image from 'next/image'
import logo from '../../../public/image/logo2.png'

export default function JB() {

    const options = [
        {name : '使用者名稱', time : '發送時長', content:'今天早餐喝了 50ml 乳清 + 400ml 全脂牛奶 (內文)', topic : '日誌主旨'},
        {name : '使用者名稱', time : '發送時長', content:'今天午餐吃了鵝肉飯，外送打八折很便宜 (內文)', topic : '日誌主旨'},
        {name : '使用者名稱', time : '發送時長', content:'今天晚餐要吃串燒，喝一堆酒好爽 (內文)', topic : '日誌主旨'}
    ]

    return (
        <>
            <div className={style.jbContainer}>
                <div className={style.jbTitle}>日誌</div>
                <div className={style.journalBlock}>
                    <div className={style.blockSpace}></div>
                    {options.map(option=>(
                            <div className={style.jbDetailContainer}>
                                <div className={style.containerLeft}>
                                    <div className={style.jbImageContainer}>
                                        <div className={style.imageFrame}>
                                            <Image className={style.logo} src={logo} alt='alter'/>
                                        </div>
                                    </div>
                                    
                                    <div className={style.textFrame}>
                                        <p className={style.user}>{option.name}</p>
                                        <p className={style.duration}>{option.time}</p>
                                    </div>
                                </div>
                                <div className={style.containerMiddle}>{option.content}</div>
                                <div className={style.containerRight}>{option.topic}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}