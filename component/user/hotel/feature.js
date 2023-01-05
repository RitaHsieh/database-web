import Menu from "../menu";
import style from "../../../styles/layout/home.module.css";
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/image/logo2.png'
import Header from "../../multi/header";
import { useEffect, useState,useRef } from "react";
import { useRouter } from "next/router";
import { set } from "date-fns";



export default function feature(context) {
    const [introduction,setIntroduction] = useState("");
    const [attraction,setAttraction] = useState("");
    const [facilty,setFacility] = useState([]);
    const [venue,setVenue] = useState([]);
    const [check,setCheck] = useState(0);

    const btn_facilityClick = (e,d) =>{
        if(d==1){
            setFacility(arr => [...arr,{value: ''}])
        }
        else if(d==2){
            setVenue(arr => [...arr,{value: ''}])
        }
    }

    const edit_attraction = (e,index,d) =>{
        if(d==1){
            let temp=facilty
            temp[index].value=e.target.value
            setFacility(temp)
            setCheck(check+1)
        }
        else if(d==2){
            let temp=venue
            temp[index].value=e.target.value
            setVenue(temp)
            setCheck(check+1) 
        }
    }
    useEffect(() => {
        facilty.forEach(element =>{ setAttraction(attraction + element.value+";")});
        venue.forEach(element =>{ setAttraction(attraction + element.value+";")});
    },[check])

    const router = useRouter();
    const data = router.query;

    
    
    
    return (
        <>
            <Header/>
            <div className={style.userHotelFeatureContainer}>
                <Menu/>
                <div className={style.main}>
                    <div className={style.content}>
                        <h1>STEP 2/3 旅館特色簡介</h1>
                        {/* <button className={style.hotelbutton}><Link href="/">預覽畫面</Link></button> */}
                    </div>

                    <p className={style.spacing}>請輸入一段文字描述旅館特色</p>
                    

                    <textarea className={style.textarea} onChange={e=>setIntroduction(e.target.value)}></textarea>


                    <p>熱門設施</p>
                    <div className={style.label_content}>
                        <button className={style.add} onClick={(e)=>btn_facilityClick(e,1)} >
                            <i class="bi bi-plus"></i>
                        </button>
                        {
                            facilty.map((option,index)=>(
                                <input key={index} onChange={(e)=>edit_attraction(e,index,1)} className={style.added}  />
                            ))
                        }
                    </div>

                    <p>熱門景點</p>

                    <div className={style.label_content}>
                        <button className={style.add} onClick={(e)=>btn_facilityClick(e,2)}>
                            <i class="bi bi-plus"></i>
                        </button>
                        {
                            venue.map((option,index)=>(
                                <input key={index} onChange={(e)=>edit_attraction(e,index,2)} className={style.added}  />
                            ))
                        }
                        
                    </div>
                    <div className={style.btn_content}>
                        <button className={style.btn}><Link href="/user/hotel/info">上一步</Link></button>
                        <button className={style.btn}>
                            <Link href={{
                                pathname:"/user/hotel/notice", 
                                
                                query:{
                                    hotelname:data.hotelname,
                                    city:data.city,
                                    region:data.region,
                                    roadandnumber:data.roadandnumber,
                                    introduction:introduction,
                                    attraction:attraction
                                }
                            }}  
                            >
                                下一步
                            </Link></button>
                    </div>
                </div>
            
            </div>
        </>
    )
}
