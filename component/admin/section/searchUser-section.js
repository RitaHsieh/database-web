import AdminHeader from "../../multi/admin_header"
import Search from "../multi/search"
import style from "../../../styles/layout/home.module.css"
import SearchUserResult from "../multi/searchUserResult"


export default function SearchUserSection() {
    return (
        <>
            <AdminHeader/> 
            <div className={style.adminJournalSection_SettingContainer}>
                <Search/>
                <SearchUserResult/>
            </div>  
        </>
    )
}