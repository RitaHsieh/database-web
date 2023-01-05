import AdminHeader from "../../multi/admin_header"
import Search from "../multi/search"
import style from "../../../styles/layout/home.module.css"
import Link from 'next/link'

export default function SearchHouseSection() {
    return (
        <>
            <AdminHeader/> 
            <div className={style.adminJournalSection_SettingContainer}>
                <Search/>
                <div className={style.jbContainer}>
                    <div className={style.jbTitle}>搜尋結果</div>
                    <div className={style.nojournalBlock}>
                        <div className={style.noInfo}>沒有找到結果</div>
                        <div className={style.back}>嘗試其他搜尋法？</div>
                    </div>
                </div>
            </div>  
        </>
    )
}