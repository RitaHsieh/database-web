import style from "../styles/popularhotel.module.css"
import Briefintroduction from "./brief-introduction"

export default function PopularHotel() {
    return(
        <div className={style.container}>
            
                <h1 className={style.title}>熱門房型</h1>
                <p className={style.content}>各種民宿資訊都在<br/>這邊=)</p>
                
                <div className={style.briefintroductionwrapper}>
                    <Briefintroduction beforeintro="介紹"
                                            name="旅館名稱"
                                            intro="介紹"
                                            addr="地址"
                                            price="價格"/>
                    <Briefintroduction beforeintro="介紹"
                                            name="旅館名稱"
                                            intro="介紹"
                                            addr="地址"
                                            price="價格"/>
                    <Briefintroduction beforeintro="介紹"
                                            name="旅館名稱"
                                            intro="介紹"
                                            addr="地址"
                                            price="價格"/>
                
                </div>
           
        </div>
    )
}
