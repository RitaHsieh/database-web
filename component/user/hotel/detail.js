import Menu from "../menu";
import Header from "../../multi/header";
// import Option from "./option"
import style from "../../../styles/layout/home.module.css";
import React, {useState} from 'react'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function account() {

    
    return (
        <>
        
            <Header/>
            <div className={style.userHotelDetailContainer}>
                <Menu/>
                
                <form className={style.edit}>
                    
                </form>
            </div>
        </>
    )
}