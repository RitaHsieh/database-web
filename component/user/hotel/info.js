import Menu from "../menu";
import Header from "../../multi/header";
// import Option from "./option"
import style from "../../../styles/layout/home.module.css";
import React, {useState,useEffect} from 'react'
import Link from "next/link";
import 'react-day-picker/dist/style.css';


export default function info() {
    const [hotelname, setHotelName] = useState('');
    const [address,setAddress] = useState('');
    const [city,setCity] = useState('');
    const [region,setRegion] = useState('');
    const [roadandnumber,setRoadAndNumber] = useState('');  


    const enter_add=(e)=>{
        setAddress(e.target.value)
        
    }

    useEffect(() => {
        let spilt_add = address.split(' ');
        setCity(spilt_add[0]);
        setRegion(spilt_add[1]);
        setRoadAndNumber(spilt_add[2]);
      },[address])
    
    
    return (
        <>
            <Header/>
            <div className={style.userHotelInfoContainer}>
                <Menu/>
                <div className={style.main}>
                    <div className={style.content}>
                        <h1 className={style.title}>STEP 1/4 旅館資訊</h1>
                        <button className={style.hotelbutton}><Link href="/">預覽畫面</Link></button>
                    </div>
                    <div className={style.content}>
                        <p className={style.contentname}>旅館名稱</p>
                        <input className={style.short_input} onChange={e=>{setHotelName(e.target.value)}} placeholder={hotelname}/>
                    </div>
                    <div className={style.content}>
                        <p className={style.contentname}>旅館地址</p>
                        <input className={style.long_input} placeholder={address} onChange={e=>{enter_add(e)}} />
                    </div>
                    <div className={style.pic_content}>
                        <div className={style.contentname}>旅館圖片</div>
                        <div className={style.image}>
                        <i class="bi bi-plus-circle" className={style.pic_icon}></i>
                        </div>
                    </div>
                    <div className={style.btn_content}>
                        <button className={style.btn} >
                            <Link href={{
                                pathname:"/user/hotel/feature", 
                                query:{
                                    hotelname:hotelname,
                                    city:city,
                                    region:region,
                                    roadandnumber:roadandnumber
                                }
                            }}>
                            下一步
                            </Link>
                        </button>
                    </div>
                    <div>{address}</div>
                    <div>{city}</div>
                    <div>{region}</div>
                    <div>{roadandnumber}</div>
                </div>
            </div>
        </>
    )
}