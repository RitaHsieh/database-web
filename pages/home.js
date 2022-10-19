import Briefintroduction from "../component/brief-introduction"
import Section from "../component/Section"
import Search from "../component/search"

export default function Home() {
    return (
        <>
            <Section/>
            <Search/>

            <Briefintroduction beforeintro="介紹" name="飯店名稱" intro="介紹" addr="地址" price="價格"/>
        </>
    )
}