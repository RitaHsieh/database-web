import Setting from "./Setting"
import Option from "./option"
import style from "../../styles/layout/home.module.css"
import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/image/logo2.png'

export default function account() {
    return (
        <div className={style.userIndexSectionContainer}>

            <Setting/>
            <div className={style.columnContainer}>
                <Link href="/"><Image className={style.logo} src={logo} alt='alter'/></Link>
                <Option/>
            </div>
        </div>
    )
}