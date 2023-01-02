
import style from "../../../styles/layout/home.module.css";
import Link from 'next/link';
import Header from "../../multi/header";
import Label from './additem';
import Menu from "../menu";

import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
import {useState, useEffect} from 'react';
import useSWR from "swr";

export default function room() {
    // label 新增動畫
    const router = useRouter();
    const room = router.query;
    const authToken = Cookies.get('authToken');

    const [room_name,setRoomName] = useState(room["room_name"]);
    const [quantity,setQuantity] = useState(room["quantity"]);
    const str = String(room["bed_type"]);
    const flag = str.includes(",");
    if (flag){
        var bed = str.split(',');
    }
    const [singleBed,setSingleBed] = useState(flag?bed[0]:0);
    const [doubleBed,setDoubleBed] = useState(flag?bed[1]:0);
    const [capacity,setCapacity] = useState(room["capacity"]);
    const [introduction,setIntroduction] = useState(room["introduction"]);
    const [installation,setInstallation] = useState(room["installation"]);
    const install = String(room["installation"]);
    console.log(install);
    const initialList=[]
    if (install.includes(",")){
        const lists= install.split(',');
        lists.shift();
        console.log(lists);
        lists.forEach(function(value){
            initialList.push({name: value})
        });
    }
    const [original_price,setOriginalPrice] = useState(room["original_price"]);
    const [price, setPrice] = useState(room["price"]);
    const [shouldPost,setShouldPost] = useState(false);
    const [shouldPut,setShouldPut] = useState(false);
    const hotel_id=1;
    const [id, setId] = useState(room["id"]);

    const [label, setLabel] = useState(true);
    const [list, setList] = useState(initialList);
    const [name, setName] = useState('');
    const label_input = [style.addLabel, style.addLabel_hide];

    if (typeof(room["room_name"]) === 'undefined'){
        console.log("do not recieve room info");
        console.log(room);
        var post_flag = true;
    }
    else {
        console.log("recieved room info");
        var post_flag = false;
    }
    const [post, setPost] = useState(post_flag);

    const post_fetcher = (url,room_name,quantity,singleBed,doubleBed,capacity,introduction,installation,original_price,price,hotel_id) => {fetch(url, {
        headers: {
            'content-type': 'application/json',
            'Authorization': "Bearer " + authToken,
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
            console.log("post fetch finish");
            console.log(response);
            setShouldPost(shouldPost => !shouldPost);
            setPost(false);
        })
    }

    const { post_data } = useSWR(shouldPost ? ['https://dhkmj1jao2.execute-api.us-east-1.amazonaws.com/test/room/',
    room_name, quantity, singleBed, doubleBed, capacity, introduction, installation, original_price, price, hotel_id] : null, post_fetcher)
    
    const put_fetcher = (url,id,room_name,quantity,singleBed,doubleBed,capacity,introduction,installation,original_price,price,hotel_id) => {fetch(url, {
        headers: {
            'content-type': 'application/json',
            'Authorization': "Bearer " + authToken,
        },
        body: JSON.stringify({  
            "id": id,
            "room_name": room_name,
            "quantity": quantity,
            "bed_type": singleBed.toString() + "," + doubleBed.toString(),
            "capacity": capacity,
            "introduction": introduction,
            "installation": installation, 
            "original_price": original_price,
            "price": price,
            "hotel_id": 1,
            "images": ["string"]
        }),
        method: 'PUT'}).then((response)=>{
            console.log("put fetch finish");
            setShouldPut(shouldPut => !shouldPut);
        })
    }

    const { put_data } = useSWR(shouldPut ? ['https://dhkmj1jao2.execute-api.us-east-1.amazonaws.com/test/room/',
    id, room_name, quantity, singleBed, doubleBed, capacity, introduction, installation, original_price, price, hotel_id] : null, put_fetcher)
    

    const addOnClick = () => {
        setLabel(label => !label);
    };
    const handleChange = (e) => {
        setName(e.target.value);
    };
    const handler = (e) => {
        if (e.key==='Enter'){
            e.preventDefault();
            setLabel(label => !label);
            const newList = list.concat([{name: name},]);
            setList(newList);
            setInstallation(installation + "," + name);
            setName('');
        }
    };
    const buttonClick=(e, post)=>{
        if (post===true) {
            setShouldPost(shouldPost => !shouldPost);
        }
        else {
            setShouldPut(shouldPut => ! shouldPut);
        }
        console.log("end");
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

  
    useEffect(() => {

    });

    return (
        <>
            <Header/>
            <div className={style.userHotelRoomContainer}>
                {console.log("render")}
                <Menu/>
                <div className={style.main}>
                    <div className={style.content}>
                        <h1>新增/更改房型</h1>
                        <button className={style.hotelbutton}><Link href="/">預覽畫面</Link></button>
                    </div>
                    <form className={style.roomform} onSubmit={handleSubmit}>
                        <div className={style.content}>
                            <p>房型名稱</p>
                            <input className={style.input} onChange={event=>{setRoomName(event.target.value)}} value={room_name} type="text"></input>
                        </div>
                        <div className={style.content}>
                            <p>可容納人數</p>
                            <input className={style.input} type="number" onChange={event=>{setCapacity(parseInt(event.target.value))}} value={capacity}></input>
                        </div>
                        <div className={style.content}>
                            <p>床型</p>
                            <div className={style.input}>
                                <div className={style.content}>
                                <input type="number" onChange={event=>{setSingleBed(parseInt(event.target.value))}} value={singleBed}></input>
                                <p>張單人床</p>
                                </div>
                                <div className={style.content}>
                                <input type="number" onChange={event=>{setDoubleBed(parseInt(event.target.value))}} value={doubleBed}></input>
                                <p>張雙人床</p>
                                </div>
                            </div>
                        </div>
                        <p className={style.spacing}>房型介紹</p>
                        <textarea className={style.textarea} onChange={event=>{setIntroduction(event.target.value)}} value={introduction}></textarea>
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
                            <p>網站價</p><input className={style.input} type="number" onChange={event=>{setPrice(parseInt(event.target.value))}} value={price}></input>
                        </div>
                        <div className={style.content}>
                            <p>原價</p><input className={style.input} type="number" onChange={event=>{setOriginalPrice(parseInt(event.target.value))}} value={original_price}></input>
                        </div>
                        <div className={style.content}>
                            <p>房型總數量</p><input className={style.input} type="number" onChange={event=>{setQuantity(parseInt(event.target.value))}} value={quantity}></input>
                        </div>
                        <div className={style.btn_content}>
                            <button className={style.btn} onClick={event=>buttonClick(event, post)}>確認</button>
                        </div>
                    </form>
                    
                </div>
            
            </div>
        </>
    )
}
