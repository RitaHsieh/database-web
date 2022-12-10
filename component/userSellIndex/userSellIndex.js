import Menu from "../user/menu"
import style from "../../styles/layout/home.module.css"
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/image/logo2.png'
import Table from './table'

export default function Home() {

    const options = [
        {value: '', text: '選擇旅館'},
        {value: 1 , text: '旅館A'},
        {value: 2 , text: '旅館B'},
        {value: 3 , text: '旅館C'},
      ];

    return (
        <>
            
            <div className={style.searchTopContainer}>
                <p className={style.text}>Rent You on Sunday</p>
                <Link className={style.logo} href="/"><Image src={logo} alt='logo'/></Link>
            </div>
            <div className={style.userSellIndex_SettingContainer}>
                <Menu/>
                <div className={style.container}>
                    <div className={style.switch}>
                        <p className={style.buttontext}>單日銷售情形</p>
                        <button className={style.innerbutton} type="button"><Link href="/userSellOrder">單筆訂單</Link></button>
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
                    </div>
                    <div className={style.salesfiguresblock}>
                        <div className={style.textcontainer}>
                            <p className={style.title}>售出房型</p>
                            <div className={style.moneycontainer}>
                                <p className={style.sale}>總銷額：</p>
                                <p className={style.money}>NTD 10000$</p>
                            </div>
                        </div>
                        <Table/>
                    </div>
                </div>
            </div>
        </>
    )
}
