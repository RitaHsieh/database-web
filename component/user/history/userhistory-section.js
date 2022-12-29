import Menu from "../menu"
import Result from "./result"
// import Option from "./option"
import style from "../../../styles/layout/home.module.css"
import {useState,useEffect} from "react"
export default function index() {
    
    const options = [
        {name: '旅店名稱', addr: '旅店地址', room: '訂購房型', price: 'NT$價錢', time: '住宿時間', state: '訂單狀況'},
        {name: '旅店名稱', addr: '旅店地址', room: '訂購房型', price: 'NT$價錢', time: '住宿時間', state: '訂單狀況'},
        {name: '旅店名稱', addr: '旅店地址', room: '訂購房型', price: 'NT$價錢', time: '住宿時間', state: '訂單狀況'},
      ];

    const [changing, setChanging] = useState(true);
    
    
    const dosth = () => {
        setChanging(changing => !changing);
    };
    return (
        <>
        
            <div className={style.userHistoryTopContainer}>
                <p className={style.text}>Rent You on Sunday</p>
            </div>
            <div className={style.userHistoryButtonContainer}>
                <div className={style.bottomleftcontainer}>
                    <Menu/>
                </div>
                <div className={style.hoteldata}>
                    {options.map(option => (
                        
                        <Result 
                        name={option.name} 
                        addr={option.addr} 
                        room={option.room} 
                        price={option.price}
                        time={option.time}
                        state={option.state}
                    />
                    ))}

                </div>
                
            </div>
        </>
    )
}