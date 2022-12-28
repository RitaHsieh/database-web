import style from "../../../styles/layout/home.module.css"
import Image from 'next/image'
import logo from '../../../public/image/logo2.png'

export default function HouseResult() {

    const options = [
        {name : '使用者名稱 (使用者ID)', permission : '帳號權限：', register:'登記房屋數量：', accomodation : '住宿次數', rent : '租房次數',personalInfo :'個人資訊' },
        {name : '使用者名稱 (使用者ID)', permission : '帳號權限：', register:'登記房屋數量：', accomodation : '住宿次數', rent : '租房次數',personalInfo :'個人資訊' }
    ]

    

    //{option.topic}

    return (
        <>
            <div className={style.SearchHouseResultContainer}>
                <div className={style.rbTitle}>搜尋結果：</div>
                <div className={style.resultBlock}>
                    <div className={style.blockSpace}></div>

                    {options.map(option=>(
                        <div className={style.rbDetailContainer}>
                            <div className={style.containerLeft}>
                                <div className={style.jbImageContainer}>
                                    <div className={style.imageFrame}>
                                        <Image className={style.logo} src={logo} alt='alter'/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={style.containerRight}>
                                <div className={style.title}>{option.name}</div>
                                <div className={style.middleInfo}>{option.permission}</div>
                                <div className={style.middleInfo}>{option.register}</div>
                                <div className={style.space}></div>
                                <div className={style.rowContainer}>
                                    <div className={style.content}>{option.accomodation}</div>
                                    <div className={style.content}>{option.rent}</div>
                                    <div className={style.bigcontent}>{option.personalInfo}</div>
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