import style from "../styles/search-section.module.css"
import Order from "./order"
import Filter from "./Filter"
import Searchform_2 from "./Searchform-2"
import Search_result from "./search_result"

export default function search_section() {
    return (
        <>
            <Order/>
            <div className={style.hoteldata}>
                <div>
                <Search_result/>
                </div>
                <div>
                <Search_result/>
                </div>
            </div>
            <Searchform_2  />
            <Filter/>
        </>
    )
}