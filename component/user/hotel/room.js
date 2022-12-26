import Menu from "../menu";
import style from "../../../styles/layout/home.module.css";
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/image/logo2.png'
import Header from "../../multi/header";
import Label from "./additem";

import {useState} from 'react';
import useSWR from "swr";

export default function room() {

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
    }

    const handler = (e) => {

        if (e.key==='Enter'){
            setLabel(label => !label);
            const newList = list.concat([{name: name, id: '1'},]);
            setList(newList);
            setName('');
        }
    };


    return (
        <>
            <Header/>
            <div className={style.userHotelRoomContainer}>
                {console.log("render")}
                <Menu/>
                <div className={style.main}>
                    <div className={style.content}>
                        <h1>房型設定</h1>
                        <button className={style.hotelbutton}><Link href="/">預覽畫面</Link></button>
                    </div>
                    <form className={style.roomform}>
                        <div className={style.content}>
                            <p>房型資訊</p>
                            <input className={style.input} type="text"></input>
                        </div>
                        <div className={style.content}>
                            <p>可容納人數</p>
                            <input className={style.input} type="text"></input>
                        </div>
                        <div className={style.content}>
                            <p>床型</p>
                            <div className={style.input}>
                                <div className={style.content}>
                                <input type="text"></input>
                                <p>張單人床</p>
                                </div>
                                <div className={style.content}>
                                <input type="text"></input>
                                <p>張雙人床</p>
                                </div>
                            </div>
                        </div>
                        <p className={style.spacing}>房型介紹</p>
                        <textarea className={style.textarea}></textarea>
                        <p>房間設施</p>
                        <div className={style.labelcontainer}>
                            <ul>
                            {list.map((item) => (    
                                <Label name={item.name}></Label>
                            ))}
                            </ul>
                            <button className={style.add} type="button" onClick={event=>addOnClick()}> 
                                <i class="bi bi-plus"></i>
                            </button>
                        </div>
                        <div className={label_input[label===true?1:0]}> 
                            <input type="text" onKeyDown={(e) => handler(e)} onChange={(e) => handleChange(e)} value={name} placeholder="add label here"></input>
                        </div>
                        <div className={style.content}>
                            <p>網站價</p><input className={style.input} type="text"></input>
                        </div>
                        <div className={style.content}>
                            <p>原價</p><input className={style.input} type="text"></input>
                        </div>
                        <div className={style.content}>
                            <p>房型總數量</p><input className={style.input} type="text"></input>
                        </div>
                    </form>
                    <div className={style.newroom}>
                        <i className="bi bi-plus"></i>
                        <p>新增房型</p>
                    </div>
                    <div className={style.btn_content}>
                        <button className={style.btn}><Link href="/user/hotel/">確認</Link></button>
                    </div>
                </div>
            
            </div>
        </>
    )
}
