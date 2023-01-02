import AdminHeader from "../../multi/admin_header"
import Search from "../multi/search"
import style from "../../../styles/layout/home.module.css"
import UserDetail from "../multi/userDetail"


export default function SearchHouseSection() {
    return (
        <>
            <AdminHeader/> 
            <div className={style.adminJournalSection_SettingContainer}>
                <Search/>
                <UserDetail/>
            </div>  
        </>
    )
}