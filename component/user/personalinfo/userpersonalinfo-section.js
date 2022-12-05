import Menu from "../menu";
// import Option from "./option"
import style from "../../../styles/layout/home.module.css";

import React, {useState} from 'react'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function account() {

    const [bdfloat, setBdFloat]=useState(true);

    const daypicker=[style.daypicker,style.daypicker1]
    const mask=[style.mask,style.mask1]

    const [bdselected, setBdSelected] = useState();

    const bdbuttonClick = () => {
        console.log("change the float")
        setBdFloat(bdfloat => !bdfloat);
    };
    
    let footer = <p>Please pick a day.</p>;
    if (bdselected) {
        footer = <p>You picked {format(bdselected, 'PP')}.</p>;
        
    }

    // useEffect(()=>{
    //     let id=setInterval(()=>{
    //         setCount(count=>count+1)
    //     },10000)
    //     return ()=>clearInterval(id)
    // },[])
    
    return (
        <>
        
            <div className={style.searchTopContainer}>
                <p className={style.text}>Rent You on Sunday</p>
            </div>
            <div className={style.userPersonalInfoButtonContainer}>
                <Menu/>
                
                <div className={style.userinfoblock}>
                    <div className={style.tilte}><h1>編輯個人資料</h1></div>
                    <div className={style.usersetting}>
                        <div className = {style.usertitle}>
                            <div className={style.image}></div>
                            <h2>真實姓名</h2>
                            <button className={style.userbutton}>上傳圖片</button>
                        </div>
                        <form className={style.userinfo}>
                            <p>暱稱</p>
                            <input type="text" name="userName" placeholder="user name"></input>
                            
                            <p>電子信箱</p>
                            <input type="text" name="email" placeholder="email"></input>
                            <p>電話號碼</p>
                            <input type="text" name="phone" placeholder="phone number"></input>
                            <p>出生日期</p>
                            <button onClick={event => bdbuttonClick()}>{bdselected==null?"出生日期":format(bdselected, 'PP')}</button>
                            <p>性別</p>
                            <select>
                                <option value="none" selected disabled hidden>性別</option> 
                                <option value="male">男</option> 
                                <option value="female">女 </option> 
                                <option value="other">其他</option> 
                            </select>
                            <p>聯絡地址</p>
                            <input type="text" name="address" placeholder="address"></input>

                            <input type="submit" value="送出資料" className={style.submit}></input>
                        </form>
                    </div>

                    {/* <div className={style.userinfo}>
                        <button className={style.changeinfo} onClick={event=>dosth()}>{changing?"Yes":"No"}</button>
                    </div> */}
                </div>

                <div className={mask[bdfloat===true?0:1]} onClick={bdbuttonClick}></div>
                <DayPicker
                    mode="single"
                    selected={bdselected}
                    onSelect={setBdSelected}
                    footer={footer}
                    className={daypicker[bdfloat===true?0:1]}
                />
            </div>
        </>
    )
}