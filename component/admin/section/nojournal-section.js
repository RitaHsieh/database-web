import ID from "../multi/id"
import AdminHeader from "../../multi/admin_header"
import style from "../../../styles/layout/home.module.css"
import Link from 'next/link'

export default function JournalSection() {
    return (
        <>
            <AdminHeader/> 
            <div className={style.adminJournalSection_SettingContainer}>
                <ID/>
                <div className={style.jbContainer}>
                    <div className={style.jbTitle}>日誌</div>
                    <div className={style.nojournalBlock}>
                        <div className={style.noInfo}>沒有任何通知</div>
                        <div className={style.back}><Link href="/">返回首頁↰</Link></div>
                    </div>
                </div>
            </div>  
        </>
    )
}