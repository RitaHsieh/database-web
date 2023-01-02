import AdminHeader from "../../multi/admin_header"
import Search from "../multi/search"
import style from "../../../styles/layout/home.module.css"
import SearchHouseResult from "../multi/searchHouseResult"


export default function SearchHouseSection() {
    return (
        <>
            <AdminHeader/> 
            <div className={style.adminJournalSection_SettingContainer}>
                <Search/>
                <SearchHouseResult/>
                {/* name={0} */}
            </div>  
        </>
    )
}