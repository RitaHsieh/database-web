import Menu from "../menu"
import Result from "./result"
// import Option from "./option"
import style from "../../../styles/layout/home.module.css"
import {useState,useEffect} from "react"
export default function index() {
    
    const options = [
        {name: '旅店名稱', addr: '旅店地址', room: '目前剩餘空房', price: '顧客評分'},
        {name: '旅店名稱', addr: '旅店地址', room: '目前剩餘空房', price: '顧客評分'},
        {name: '旅店名稱', addr: '旅店地址', room: '目前剩餘空房', price: '顧客評分'},
      ];

    const [changing, setChanging] = useState(true);
    
    
    const dosth = () => {
        setChanging(changing => !changing);
    };
    return (
        <>
        
            <div className={style.userHotelIndexTopContainer}>
                <p className={style.text}>Rent You on Sunday</p>
            </div>
            <div className={style.userHotelIndexButtonContainer}>
                <div className={style.bottomleftcontainer}>
                    <Menu/>
                </div>
                <div className={style.hoteldata}>
                    <div className={style.infoSearch}>
                        <p className={style.text2}>顯示</p>
                        <select className={style.select}>
                            <option selected disabled hidden></option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <p className={style.text2}>筆</p>
                        <p className={style.text2}>搜尋</p>
                        <input className={style.search} placeholder=""></input>
                        <p className={style.text2}>+新增</p>
                        <p className={style.text3}>-刪除</p>
                    </div>

                    {options.map(option => (
                        
                        <Result 
                        name={option.name} 
                        addr={option.addr} 
                        room={option.room} 
                        price={option.price}
                    />
                    ))}

                </div>
                
            </div>
        </>
    )
}