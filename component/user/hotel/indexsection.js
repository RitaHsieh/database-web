import Menu from "../menu";
import style from "../../../styles/layout/home.module.css";
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/image/logo2.png'
import Header from "../../multi/header";
import Hotel from "../../search/search_result";

import {useState, useEffect} from 'react';
import useSWR from "swr";
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
// import aroom from "./aroom";

export default function room() {

    const router = useRouter();
    const hotel = router.query;

    // const navigate=useNavigation();
    const [shouldFetch, setShouldFetch]=useState(true);
    const [list, setList] = useState([]);
    const authToken = Cookies.get('authToken');
    // var list=[];

    const get_fetcher = (url) => {
        fetch(url) //+ '?' + ( new URLSearchParams( hotel_id ) ).toString())
        .then(response => response.json())
        .then((response) => {
            setList(list.concat(response.items));
            console.log("list: ");
            console.log(list);
            setShouldFetch(shouldFetch => !shouldFetch);
        });
    }
    
    const aroom = (props)=> {
        console.log(props);
        props["hotel_id"] = hotel.id;
        return (
            <div className={style.room}>
                <Link className={style.room_link}
                    href={{
                    pathname: '/user/hotel/room',
                    query: props // the data
                    }}>
                        <i class="bi bi-pencil-fill"></i>
                        <h1>{props["room_name"]}</h1>   
                </Link>
            </div>
        )
    }
   
    const { data, error } = useSWR(shouldFetch?['https://dhkmj1jao2.execute-api.us-east-1.amazonaws.com/test/room/?hotel_id=' + hotel.id]:null, get_fetcher);
    // console.log("now, that's see...");
    // console.log(data);
    
    
    return (
        <>
            <Header/>
            <div className={style.userHotelRoomContainer}>
                {console.log("render")}
                <Menu/>
                <div className={style.main}>
                    <Hotel
                        linking={"/user/hotel/info"}
                        msg={hotel}
                        name={hotel.hotel_name} 
                        addr={hotel.city + hotel.region + hotel.road_and_number} 
                        price={"目前空房數量："}
                    />
                    <div className={style.content}>
                        <h1>目前房型</h1>
                        {/* <button className={style.hotelbutton}><Link href="/">預覽畫面</Link></button> */}
                    </div>
                    {list?
                    list.map((object) => ( 
                        aroom(object)
                    )):<></>}

                    <Link href={{
                        pathname: '/user/hotel/room',
                        query: {hotel_id: hotel.id} // the data
                        }}>
                    <div className={style.room}>
                        <i className="bi bi-plus"></i>
                        <p>新增房型</p>
                    </div>
                    </Link>
                    
                </div>
            
            </div>
        </>
    )
}
