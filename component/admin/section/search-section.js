import ID from "../multi/id"
import AdminHeader from "../../multi/admin_header"
import Search from "../multi/search"

import style from "../../../styles/layout/home.module.css"
import Image from "next/image";
import hotel from '../../../public/image/admin.jpg'


export default function SearchSection() {
    return (
        <>
            <AdminHeader/> 
            <div className={style.adminJournalSection_SettingContainer}>
                <ID/>
                <Search/>
                <div className={style.imageFrame}>
                    <Image fill src={hotel} alt="Picture of the hotel"/>
                </div>
            </div>  
        </>
    )
}