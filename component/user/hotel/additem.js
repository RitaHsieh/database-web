
import style from "../../../styles/layout/home.module.css";
//@flow
import React from 'react'


export default function LabelItems(props) {
    const name = props.name;
    return (
    <button className={style.added} type="button"> 
        <p>{props.name}</p>
    </button>
    );
}