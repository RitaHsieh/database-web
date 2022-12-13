import style from "../../styles/layout/home.module.css"
import Order from "./order"
import Filter from "./Filter"
import Header from "../multi/header"
import Searchform_2 from "./Searchform-2"
import Search_result from "./search_result"
import { useState } from "react"




export default function search_section() {

    const [float,setFloat] = useState(false);

    const mask=[style.searchMask,style.searchMaskHidden];


    const btnClick = () => {
        setFloat(float => !float);
    };

    return (
        <>
            <Header/>
            <div className={style.searchBottomContainer}>
                <div className={style.bottomleftcontainer}>
                    <Searchform_2/>
                    <button className={style.btnfilter} onClick={btnClick}>篩選</button>
                </div>
                <div className={style.hoteldata}>
                    <Order/>
                    <Search_result 
                        name={"旅館名稱"} 
                        addr={"旅館地址"} 
                        room={"訂購房型"} 
                        price={"價格"}
                        time={"訂購時間"}
                        condition={"訂單狀態"}
                    />
                    <Search_result 
                        name={"旅館名稱"} 
                        addr={"旅館地址"} 
                        room={"訂購房型"} 
                        price={"價格"}
                        time={"訂購時間"}
                        condition={"訂單狀態"}
                    />
                    <Search_result 
                        name={"旅館名稱"} 
                        addr={"旅館地址"} 
                        room={"訂購房型"} 
                        price={"價格"}
                        time={"訂購時間"}
                        condition={"訂單狀態"}
                    />
                    <Search_result 
                        name={"旅館名稱"} 
                        addr={"旅館地址"} 
                        room={"訂購房型"} 
                        price={"價格"}
                        time={"訂購時間"}
                        condition={"訂單狀態"}
                    />
                    <Search_result 
                        name={"旅館名稱"} 
                        addr={"旅館地址"} 
                        room={"訂購房型"} 
                        price={"價格"}
                        time={"訂購時間"}
                        condition={"訂單狀態"}
                    />
                </div>
            </div>
            <div className={float===true?mask[0]:mask[1]} onClick={event=>btnClick()}></div>
            <Filter float={float===true?0:1}/>

        </>
    )
}