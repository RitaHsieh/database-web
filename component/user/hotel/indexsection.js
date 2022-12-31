import Menu from "../menu";
import style from "../../../styles/layout/home.module.css";
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/image/logo2.png'
import Header from "../../multi/header";
// import Room from "./aroom";
// import { useNavigation, Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import useSWR from "swr";
import aroom from "./aroom";

export default function room() {

    // const navigate=useNavigation();
    const [shouldFetch, setShouldFetch]=useState(true);
    const [list, setList] = useState([]);
    const room_object = 
    {
        "room_name": "testing",
        "quantity": 0,
        "bed_type": "string",
        "capacity": 0,
        "introduction": "string",
        "installation": "string",
        "original_price": 0,
        "price": 0,
        "hotel_id": 9,
        "images": ["string"]
    }
    // var list=[];

    const get_fetcher = (url, hotel_id) => {
        fetch(url + '?' + ( new URLSearchParams( hotel_id ) ).toString())
        .then(response => response.json())
        .then((response) => {
            setList(list.concat(response.items));
            console.log(list);
            setShouldFetch(shouldFetch => !shouldFetch);
        });
    }
    // const url='https://dhkmj1jao2.execute-api.us-east-1.amazonaws.com/test/room/';
    // const hotel_id={hotel_id:1};
    
    // const changePage = (props) => {
 
    //     navigate("/user/hotel/room", props);
    // }
    const aroom = (props)=> {
        console.log(props);
        return (
            <div>
                <h1>{props["room_name"]}</h1>
                <p></p>
                <button>      
                    <Link 
                          href={{
                            pathname: '/user/hotel/room',
                            query: props // the data
                          }}>修改房型資訊</Link>
                </button>
            </div>
        )
    }
   
    const { data, error } = useSWR(shouldFetch?['https://dhkmj1jao2.execute-api.us-east-1.amazonaws.com/test/room/',{hotel_id:9}]:null, get_fetcher);
    // console.log("now, that's see...");
    // console.log(data);
    
    
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
                    {list.map((object) => ( 
                        aroom(object)
                    ))}

                    <Link href="/user/hotel/room">
                    <div className={style.newroom}>
                        <i className="bi bi-plus"></i>
                        <p>新增房型</p>
                    </div>
                    </Link>
                    
                </div>
            
            </div>
        </>
    )
}
