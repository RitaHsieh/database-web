import Option from "../component/option"
import Setting from "../component/Setting"
import style from "../styles/account.module.css"

export default function account() {
    return (
        <div className={style.container}>
            <Setting/>
            <Option/>
        </div>
    )
}