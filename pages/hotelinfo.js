import Left from "../component/hotelInfo/room"
import Right from "../component/hotelInfo/book"

export default function Home() {
    return (
        <>
            <div style={{display:"flex"}}>
                <div>
                    <Left/>
                    <Left/>
                    <Left/>
                </div>
                <Right/>
            </div>
            
        </>
    )
}