import Briefintroduction from "../component/brief-introduction"
import Section from "../component/Section"

export default function Home() {
    return (
        <>
            <Section/>
            <Briefintroduction beforeintro="介紹" name="飯店名稱" intro="介紹" addr="地址" price="價格"/>
        </>
    )
}