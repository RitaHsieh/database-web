import Menu from "../menu";
import style from "../../../styles/layout/home.module.css";
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/image/logo2.png'
import Header from "../../multi/header";



export default function room() {
    
    return (
        <>
            <Header/>
            <div className={style.userHotelRoomContainer}>
                <Menu/>
                <div className={style.leftContainer}>
                    <div className={style.title}>
                        <h1>STEP 3/4 房型資訊設定</h1>
                        <button className={style.hotelbutton}><Link href="/">預覽畫面</Link></button>
                    </div>
                    <form className={style.roomform}>
                        <p>房型資訊</p>
                        <input className={style.input} type="text"></input>
                        <p>可容納人數</p>
                        <input className={style.input} type="text"></input>
                        <p>床型</p>
                        <div className={style.input}>
                            <input type="text"></input>
                            <p>張單人床</p>
                            <input type="text"></input>
                            <p>張雙人床</p>
                        </div>
                        <p>房型介紹</p>
                        <textarea className={style.textarea}></textarea>
                        <p>房間設施</p>
                        <div className={style.labelcontainer}>
                        <button className={style.add}>
                            <i class="bi bi-plus"></i>
                        </button>
                        </div>
                        <p>網站價</p><input className={style.input} type="text"></input>
                        <p>原價</p><input className={style.input} type="text"></input>
                        <p>房型總數量</p><input className={style.input} type="text"></input>
                    </form>
                    <div className={style.newroom}>
                        <i class="bi bi-plus"></i>
                        <p>新增房型</p>
                    </div>
                    <div className={style.btn_content}>
                        <button className={style.btn}>上一步</button>
                        <button className={style.btn}>下一步</button>
                    </div>
                </div>
            
            </div>
        </>
    )
}
