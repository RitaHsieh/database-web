import Menu from "../menu"
import style from "../../../styles/layout/home.module.css"
import Link from 'next/link';
import Header from "../../multi/header";

export default function Home() {

    const options = [
        {value: '', text: '選擇旅館'},
        {value: 1 , text: '旅館A'},
        {value: 2 , text: '旅館B'},
        {value: 3 , text: '旅館C'},
      ];

    return (
        <>
            <Header/>
            <div className={style.userSellOrder_SettingContainer}>
                <Menu/>
                <div className={style.container}>
                    <div className={style.switch}>
                        <button className={style.innerbutton} type="button"><Link href="/user/sell/">單日銷售情形</Link></button>
                        <div className={style.buttontext}>單筆訂單</div>
                    </div>
                    <div className={style.filterblock}>
                        <p className={style.filterp}>旅館</p>
                        <select className={style.selectform} onChange={event=>Setpeople(event.target.value)}> 
                            {options.map(option => (
                                <option className={style.option} key={option.value} value={option.value}>
                                    {option.text}
                                </option>
                            ))}
                        </select>
                        <p className={style.filterp2}>日期</p>
                        <select className={style.selectform} onChange={event=>Setpeople(event.target.value)}> 
                            {options.map(option => (
                                <option className={style.option} key={option.value} value={option.value}>
                                    {option.text}
                                </option>
                            ))}
                        </select>

                        <p className={style.filterp3}>顧客姓名</p>
                        <input className={style.selectform} placeholder="請輸入您的姓名"></input>
                        

                    </div>
                    <div className={style.salesfiguresblock}>
                        <p className={style.title}>呂XX 小姐</p>
                        <div className={style.infoblock}>
                            <p className={style.info1}>四人房 1 間 兩人房 1 間</p>
                            <p className={style.info2}>訂單狀態</p>
                            <button className={style.button} type="button">點我查看狀態</button>
                        </div>
                        <div className={style.infoblock}>
                            <p className={style.info1}>2022/10/30-2022/11/2</p>
                            <p className={style.info2}>旅館已確認 : 2022/10/23 15:30</p>
                        </div>
                        <p className={style.info3}>住客已付款 : 匯款後五碼 01234</p>
                        <div className={style.infoblock}>
                            <p className={style.info3}>待核銷</p>
                            <button className={style.button} type="button">點我核銷</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
