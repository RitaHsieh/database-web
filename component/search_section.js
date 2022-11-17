import style from "../styles/search-section.module.css"
import Order from "./order"
import Filter from "./Filter"
import Searchform_2 from "./Searchform-2"
import Search_result from "./search_result"

export default function search_section() {

    const [float,setFloat] = useState(true);

    const handleClick=()=>{
       setFloat(float=!float);
    }

    return (
        <>
            <div>
                <p className={style.text}>AGODA</p>
                <div><Searchform_2  /></div>
                <Filter_click  />
            </div>
            <div className={style.bottomcontainer}>
                <div className={style.bottomleftcontainer}>
                    <Searchform_2/>
                    <button className={style.btnfilter}>篩選</button>
                </div>
                <div className={style.hoteldata}>
                    <div className={style.block}>
                        <Search_result/>
                    </div>
                    <div className={style.block}>
                        <Search_result/>
                    </div>
                    <div className={style.block}>
                        <Search_result/>
                    </div>
                    <div className={style.block}>
                        <Search_result/>
                    </div>
                    <div className={style.block}>
                        <Search_result/>
                    </div>
                </div>
            </div>

        </>
    )
}