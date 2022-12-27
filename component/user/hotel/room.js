import Menu from "../menu";
import style from "../../../styles/layout/home.module.css";
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/image/logo2.png'
import Header from "../../multi/header";
import Label from "./additem";

import {useState} from 'react';
import useSWR from "swr";
import FormData from 'form-data';

export default function room() {

    // label 新增動畫
    const initialList=[];
    const [label, setLabel] = useState(true);
    const [list, setList] = useState(initialList);
    const [name, setName] = useState('');
    const label_input = [style.addLabel, style.addLabel_hide];

    const addOnClick = () => {
        setLabel(label => !label);
    };
    const handleChange = (e) => {
        setName(e.target.value);
    };
    const handler = (e) => {
        if (e.key==='Enter'){
            setLabel(label => !label);
            const newList = list.concat([{name: name},]);
            setList(newList);
            setInstallation(installation + "," + name);
            setName('');
        }
    };

    // fetch api

    const [room_name,setRoomName] = useState("");
    const [quantity,setQuantity] = useState(0);
    const [singleBed,setSingleBed] = useState(0);
    const [doubleBed,setDoubleBed] = useState(0);
    const [capacity,setCapacity] = useState(1);
    const [introduction,setIntroduction] = useState("");
    const [installation,setInstallation] = useState("");
    const [original_price,setOriginalPrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [shouldFetch,setShouldFetch] = useState(false);

    const formData = new FormData();
    formData.append('room_name', room_name);
    formData.append('quantity', quantity);
    formData.append('bed_type', singleBed.toString() + "," + doubleBed.toString());
    formData.append('capacity', capacity);
    formData.append('introduction', introduction);
    formData.append('installation', installation);
    formData.append('original_price', original_price);
    formData.append('price', price);
    formData.append('hotel_id', 1);
    formData.append('images', "string");

    const fetcher = (url,formData) => {fetch(url, {
        headers: {
                
            },
            body:formData,
            method: 'POST'
        })
        .then((response) => {
            setShouldFetch(shouldFetch => !shouldFetch);
            return response.json();
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log("Error: ${error}");
        })
    }

    const buttonClick=()=>{
        // console.log("room_name: ", typeof(room_name))
        // console.log("quantity: ", typeof(quantity))
        // console.log("bed_type: ", typeof(singleBed.toString() + "," + doubleBed.toString()),singleBed.toString() + "," + doubleBed.toString() )
        // console.log("capacity: ", typeof(capacity))
        // console.log("introduction: ", typeof(introduction))
        // console.log("installation: ", typeof(installation), installation)
        // console.log("original_price: ", typeof(original_price))
        // console.log("price: ", typeof(price))
        for (const [key, value] of formData) {
            console.log(key, value);
        }
        setShouldFetch(shouldFetch => !shouldFetch);
        alert("Update");
    }


    const { data } = useSWR(shouldFetch ? ['https://dhkmj1jao2.execute-api.us-east-1.amazonaws.com/test/room/',formData] : null, fetcher)

    return (
        <>
            <Header/>
            <div className={style.userHotelRoomContainer}>
                {console.log("render")}
                <Menu/>
                <div className={style.main}>
                    <div className={style.content}>
                        <h1>新增房型</h1>
                        <button className={style.hotelbutton}><Link href="/">預覽畫面</Link></button>
                    </div>
                    <form className={style.roomform}>
                        <div className={style.content}>
                            <p>房型名稱</p>
                            <input className={style.input} onChange={event=>{setRoomName(event.target.value)}} type="text"></input>
                        </div>
                        <div className={style.content}>
                            <p>可容納人數</p>
                            <input className={style.input} type="number" onChange={event=>{setCapacity(parseInt(event.target.value))}}></input>
                        </div>
                        <div className={style.content}>
                            <p>床型</p>
                            <div className={style.input}>
                                <div className={style.content}>
                                <input type="number" onChange={event=>{setSingleBed(parseInt(event.target.value))}}></input>
                                <p>張單人床</p>
                                </div>
                                <div className={style.content}>
                                <input type="number" onChange={event=>{setDoubleBed(parseInt(event.target.value))}}></input>
                                <p>張雙人床</p>
                                </div>
                            </div>
                        </div>
                        <p className={style.spacing}>房型介紹</p>
                        <textarea className={style.textarea} onChange={event=>{setIntroduction(event.target.value)}}></textarea>
                        <p>房間設施</p>
                        <div className={style.labelcontainer}>
                            {list.map((item) => ( 
                                <Label name={item.name}></Label>
                            ))}
                            <button className={style.add} type="button" onClick={event=>addOnClick()}> 
                                <i class="bi bi-plus"></i>
                            </button>
                        </div>
                        <div className={label_input[label===true?1:0]}> 
                            <input type="text" onKeyDown={(e) => handler(e)} onChange={(e) => handleChange(e)} value={name} placeholder="add label here"></input>
                        </div>
                        <div className={style.content}>
                            <p>網站價</p><input className={style.input} type="number" onChange={event=>{setPrice(parseInt(event.target.value))}}></input>
                        </div>
                        <div className={style.content}>
                            <p>原價</p><input className={style.input} type="number" onChange={event=>{setOriginalPrice(parseInt(event.target.value))}}></input>
                        </div>
                        <div className={style.content}>
                            <p>房型總數量</p><input className={style.input} type="number" onChange={event=>{setQuantity(parseInt(event.target.value))}}></input>
                        </div>
                    </form>
                    {/* <div className={style.newroom}>
                        <i className="bi bi-plus"></i>
                        <p>新增房型</p>
                    </div> */}
                    <div className={style.btn_content}>
                        <button className={style.btn} onClick={event=>buttonClick()}>確認</button>
                    </div>
                </div>
            
            </div>
        </>
    )
}
