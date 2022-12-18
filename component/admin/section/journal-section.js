import ID from "../multi/id"
import JournalBlock from "../multi/journalBlock"
import AdminHeader from "../../multi/admin_header"
import style from "../../../styles/layout/home.module.css"

export default function JournalSection() {
    return (
        <>
            <AdminHeader/> 
            <div className={style.adminJournalSection_SettingContainer}>
                <ID/>
                <JournalBlock/>
            </div>  
        </>
    )
}