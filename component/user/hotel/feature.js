import Menu from "../menu";
import style from "../../../styles/layout/home.module.css";
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/image/logo2.png'
import Header from "../../multi/header";



export default function feature() {
    
    return (
        <>
            <Header/>
            <div className={style.userHotelFeatureContainer}>
                <Menu/>
                <div className={style.main}>
                    <div className={style.content}>
                        <h1>STEP 2/4 旅館特色簡介</h1>
                        <button className={style.hotelbutton}><Link href="/">預覽畫面</Link></button>
                    </div>

                    <p className={style.spacing}>請輸入一段文字描述旅館特色</p>
                    

                    <textarea className={style.textarea}></textarea>
                    <p>熱門設施</p>
                    <div className={style.label_content}>
                    <button className={style.add}>
                        <i class="bi bi-plus"></i>
                    </button>
                    </div>
                    <p>熱門景點</p>
                    <div className={style.label_content}>
                    <button className={style.added}>迪士尼</button>
                    <button className={style.add}>
                        <i class="bi bi-plus"></i>
                    </button>
                    </div>
                    <div className={style.btn_content}>
                        <button className={style.btn}><Link href="/user/hotel/info">上一步</Link></button>
                        <button className={style.btn}><Link href="/user/hotel/room">下一步</Link></button>
                    </div>
                </div>
            
            </div>
        </>
    )
}
