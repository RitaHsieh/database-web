import style from "../../../../styles/layout/home.module.css"
import {useState} from 'react';

export default function hotelinfo(props) {

    const room_info = props.room_info;

    const facility_list = room_info.installation.split(',');
    const bed = room_info.bed_type.split(',');

    const [number,setNumber] = useState(1);
    const add_btnClick = ()=>{
        setNumber(number+1);
    }
    const minus_btnClick = ()=>{
        setNumber(number-1);
    }
    const bed_type = ()=>{
        if (bed[0]==='0'){
            return <p className={style.bed}>{bed[1]}張雙人床</p>
        }
        else if (bed[1]==='0') {
            return <p className={style.bed}>{bed[0]}張單人床</p>
        }
        else {
            return <p className={style.bed}>{bed[0]}張單人床,{bed[1]}張雙人床</p>
        }
        
    }
    //請後端用總房型數量 - 當前訂房數量 的view
    
    return (
        <>
            <div className={style.hotelInfoRoomContainer}>
                <div className={style.searchcontainer}>
                    <div className={style.container}>
                        <h1 className={style.name}>{room_info.room_name}</h1>
                        <p className={style.people}>可容納人數：{room_info.capacity} 人</p>
                    </div>
                    {bed_type()}
                    
                    <div className={style.container}>
                        <p className={style.intro}>{room_info.introduction}</p>
                        <p className={style.money}>NT${room_info.price}</p>
                    </div>
                    <div className={style.container}>
                        {facility_list.map((object) => ( 
                            <button className={style.button} type="button">{object}</button>
                        ))}
                        <p className={style.discount}>原價{room_info.original_price}元,現省{room_info.original_price - room_info.price}元</p>
                    </div>
                </div>            
                <div className={style.button_container}>
                    <button className={style.btn} style={{visibility: number >= 10 && 'hidden'}} onClick={add_btnClick}>▲</button>
                    <div className={style.content}>{number}</div>
                    <button className={style.btn} style={{visibility: number <= 0 && 'hidden'}} onClick={minus_btnClick}>▼</button>
                </div>

            </div>
        </>
    )
}