import AdminHeader from "../../multi/admin_header"
import Search from "../multi/search"
import style from "../../../styles/layout/home.module.css"
import HouseDetail from "../multi/houseDetail"


export default function HouseDetailSection() {
    return (
        <>
            <AdminHeader/> 
            <div className={style.adminJournalSection_SettingContainer}>
                <Search/>
                <HouseDetail/>
            </div>  
        </>
    )
}