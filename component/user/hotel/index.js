import Menu from "../menu"
import Result from "../../search/search_result"
// import Option from "./option"
import style from "../../../styles/layout/home.module.css"
import Header from "../../multi/header";
import Link from "next/link";
import {useState,useEffect} from "react"
import useSWR from "swr";
import Cookies from 'js-cookie';

export default function index() {
    const authToken = Cookies.get('authToken');
    console.log("auth:")
    console.log(authToken)

    // const link=;
    const get_fetcher = (url) => 
        fetch(url, {
            headers: {
                'content-type': 'application/json',
                'Authorization': "Bearer " + authToken,
            }
        })
        .then(response => response.json());
        // .then((response) => {
        //     setList(list.concat(response.items));
        //     console.log(list);
        //     setShouldFetch(shouldFetch => !shouldFetch);
        // });
    

    const { data, error } = useSWR('https://dhkmj1jao2.execute-api.us-east-1.amazonaws.com/test/hotels/own', get_fetcher);
   
    const dosth = () => {
        setChanging(changing => !changing);
    };


    return (
        <>
            <Header/>
            <div className={style.userHotelIndexButtonContainer}>
                <Menu/>
                <div className={style.hoteldata}>
                    <h1 className={style.pagetitle}>旅館管理</h1>
                    <div className={style.infoSearch}>
                        <Link href="/user/hotel/info"><button className={style.btn}>+新增旅館</button></Link>
                        <button className={style.btn}>-刪除旅館</button>
                    </div>
                    {
                        data ?
                        <>{
                            // console.log(data)}</>
                            // :
                            data.map(option => (
                                <Result 
                                    linking={"/user/hotel/edithotel"}
                                    msg={option}
                                    name={option.hotel_name} 
                                    addr={option.city + option.region + option.road_and_number} 
                                    room={"目前空房數量："} 
                                />
                        ))}</>:
                        <></>
                    }
                    

                </div>
                
            </div>
        </>
    )
}