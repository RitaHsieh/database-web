import Setting from "./Setting"
import Option from "./option"
import style from "../../styles/layout/home.module.css"
import Image from 'next/image'
import Link from 'next/link'
import Header from '../multi/header'

import logo from '../../public/image/logo2.png'

export default function account() {
    return (
        <>
            <Header/>
            <div className={style.userIndexSectionContainer}>

                <Setting/>
                <Option/>
                
            </div>
        </>
        
    )
}