import style from "../../styles/layout/home.module.css"
import { useState } from "react";

export default function HotelinfoData() {
    const [arrive,setArrive] = useState('');
    const [depart,setDepart] = useState('');
    const arrive_options = [
        {value: '', text: '選擇入住時間'},
        {value: 1 , text: '時間1'},
        {value: 2 , text: '時間2'},
        {value: 3 , text: '時間3'},
    ];

    const depart_options = [
        {value: '', text: '選擇退房時間'},
        {value: 1 , text: '時間1'},
        {value: 2 , text: '時間2'},
        {value: 3 , text: '時間3'},
    ];
    return (
        <>
            <div class={style.HotelinfoDataContainer}>
                <div className={style.title}>填寫您的資料</div>
                <div className={style.blockContainer1}>
                    <div className={style.personalInfoBlock}>

                        <div className={style.blockTitle}>輸入個人資料</div>

                        <div className={style.option}><input type="checkbox" /> 會員自動填入</div>

                        <div className={style.fill}>
                            <div className={style.fillP}>姓氏</div>
                            <input className={style.fillForm} placeholder="請輸入您的姓氏"></input>
                        </div>

                        <div className={style.fill}>
                            <div className={style.fillP}>名稱</div>
                            <input className={style.fillForm} placeholder="請輸入您的名稱"></input>
                        </div>

                        <div className={style.dateBlock}>
                            <div className={style.filterblock}>
                                <p className={style.filterp}>入住日期</p>
                                <select className={style.selectform} onChange={event=>setArrive(event.target.value)}> 
                                    {arrive_options.map(option => (
                                        <option className={style.option} key={option.value} value={option.value}>
                                            {option.text}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className={style.space}></div>
                            <div className={style.filterblock}>
                                <p className={style.filterp}>退房日期</p>
                                <select className={style.selectform} onChange={event=>setDepart(event.target.value)}> 
                                    {depart_options.map(option => (
                                        <option className={style.option} key={option.value} value={option.value}>
                                            {option.text}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className={style.fill}>
                            <div className={style.fillP}>電子郵件</div>
                            <input className={style.fillForm} placeholder="請輸入您的電子郵件"></input>
                        </div>
                    </div>
                </div>

                <div className={style.blockContainer2}>
                    <div className={style.roomConfirmBlock}>
                        <div className={style.blockTitle}>房型確認</div>
                    </div>
                </div>

                <div className={style.blockContainer2}>
                    <div className={style.roomConfirmBlock}>
                        <div className={style.blockTitle}>付款方式</div>
                    </div>
                </div>

                <div className={style.blockContainer2}>
                    <div className={style.roomConfirmBlock}>
                        <div className={style.blockTitle}>特殊需求</div>
                    </div>
                </div>
                
            </div>
        </>
    )
}