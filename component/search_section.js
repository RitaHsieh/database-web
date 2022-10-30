import style from "../styles/search-section.module.css"
import Order from "./order"
import Filter from "./Filter"
import Searchform_2 from "./Searchform-2"
import Search_result from "./search_result"

export default function search_section() {
    return (
        <>
            <Order/>
            <Search_result/>
            <Searchform_2  />
            <Filter/>
        </>
    )
}