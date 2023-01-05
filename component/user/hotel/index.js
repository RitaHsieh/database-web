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