import style from "../../../styles/layout/home.module.css"
import Image from 'next/image'
import logo from '../../../public/image/logo2.png'

export default function HouseResult() {

    const options = [
        {name : '房屋名稱 (營業證字號)', owner : '房屋持有者：', roomStyle:'房型數量：', comment : '評價星級', rent : '租房次數',detail :'詳細資訊' },
        {name : '房屋名稱 (營業證字號)', owner : '房屋持有者：', roomStyle:'房型數量：', comment : '評價星級', rent : '租房次數',detail :'詳細資訊' }
    ]

    return (
        <>
            <div className={style.SearchResultContainer}>
                <div className={style.rbTitle}>搜尋結果：</div>
                <div className={style.resultBlock}>
                    <div className={style.blockSpace}></div>

                    {options.map(option=>(
                        <div className={style.rbDetailContainer}>
                            <div className={style.containerLeft}>
                                <div className={style.jbImageContainer}>
                                    <div className={style.houseImageFrame}>
                                        <Image className={style.logo} src={logo} alt='alter'/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={style.containerRight}>
                                <div className={style.title}>{option.name}</div>
                                <div className={style.middleInfo}>{option.owner}</div>
                                <div className={style.middleInfo}>{option.roomStyle}</div>
                                <div className={style.space}></div>
                                <div className={style.rowContainer}>
                                    <div className={style.content}>{option.comment}</div>
                                    <div className={style.content}>{option.rent}</div>
                                    <div className={style.bigcontent}>{option.detail}</div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}