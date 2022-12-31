
import style from "../../../styles/layout/home.module.css";
//@flow
import React from 'react'
import {useState} from 'react';


export default function LabelItems(props) {

    return (
    <button className={style.added} type="button"> 
        <p>{props.name}</p>
    </button>
    );
}