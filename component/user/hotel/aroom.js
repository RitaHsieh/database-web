import Label from "./additem";
import style from "../../../styles/layout/home.module.css";
//@flow
import React from 'react';
import {useState} from 'react';
import useSWR from "swr";

export default function aroom(props) {
    // label 新增動畫
    const room=props['props'];
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
    // {
    //     "id": 1,
    //     "room_name": "string",
    //     "quantity": 0,
    //     "bed_type": "string",
    //     "capacity": 0,
    //     "introduction": "string",
    //     "installation": "string",
    //     "original_price": 0,
    //     "price": 0,
    //     "images": null
    // }
    const [room_name,setRoomName] = useState(room.room_name);
    const [quantity,setQuantity] = useState(room.quantity);

    const [singleBed,setSingleBed] = useState(0);
    const [doubleBed,setDoubleBed] = useState(0);
    // console.log("props: ");
    // console.log(props);
    // console.log(props['props']);
    if (room.bed_type.includes(',')){
        var bed = room.bed_type.split(',');
        setSingleBed(bed[0]);
        setDoubleBed(bed[1]);
    }

    const [capacity,setCapacity] = useState(room.capacity);
    const [introduction,setIntroduction] = useState(room.introduction);
    const [installation,setInstallation] = useState(room.installation);
    const [original_price,setOriginalPrice] = useState(room.original_price);
    const [price, setPrice] = useState(room.price);
    const [shouldFetch,setShouldFetch] = useState(false);


    const post_fetcher = (url,room_name,quantity,singleBed,doubleBed,capacity,introduction,installation,original_price,price) => {fetch(url, {
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({  
            "room_name": room_name,
            "quantity": quantity,
            "bed_type": singleBed.toString() + "," + doubleBed.toString(),
            "capacity": capacity,
            "introduction": introduction,
            "installation": installation, 
            "original_price": original_price,
            "price": price,
            "hotel_id": 9,
            "images": ["string"]
        }),
        method: 'POST'}).then((response)=>{
            setShouldFetch(shouldFetch => !shouldFetch);
        })
    }

    const buttonClick=()=>{
        setShouldFetch(shouldFetch => !shouldFetch);
        console.log("end");
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    const { post_data } = useSWR(shouldFetch ? ['https://dhkmj1jao2.execute-api.us-east-1.amazonaws.com/test/room/',
                    room_name, quantity, singleBed, doubleBed, capacity, introduction, installation, original_price, price, {hotelid}, ["images"]] : null, post_fetcher)


    return (
        <>
        <form className={style.roomform} onSubmit={handleSubmit}>
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
            <div className={style.btn_content}>
                <button className={style.btn} onClick={event=>buttonClick()}>確認</button>
                <button className={style.btn} onClick={event=>buttonClick()}>刪除</button>
            </div>
        </form>
        </>
    );
}