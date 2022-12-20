import style from "../../styles/layout/home.module.css";
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/image/logo2.png'

export default function header() {

    return (
        <>
            <div className={style.searchTopContainer}>
                <p className={style.text}>Rent You on Sunday</p>
                <Link href="/"><Image className={style.logo} src={logo} alt='alter'/></Link>
            </div>  
        </>
    )
}