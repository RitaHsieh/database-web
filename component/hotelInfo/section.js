import Title from "./hoteltitle"
import Evaluate from "./hotelinfo_component/evaluate"
import Information from "./hotelinfo_component/information"
import Transportation from "./hotelinfo_component/transportation"
import Roominfo from "./hotelinfo_component/roominfo_component/roominfo"
import Introduction from "./hotelinfo_component/introduction"
import Header from "../multi/header" 
import Searchform_2 from "../search/Searchform-2"

import style from "../../styles/layout/home.module.css"
import { useState } from "react"
import useSWR from "swr"


export default function HotelinfoSection() {

    // const [float,setFloat] = useState(false);
    const [shouldFetch, setShouldFetch] = useState(true);
    const [hotel, setHotel] = useState([]);
    const hotel_id = 9;

    // const mask=[style.searchMask,style.searchMaskHidden];

    const get_fetcher = (url) => 
        fetch(url.toString())
        .then(response => response.json())
    

    const {data, error} = useSWR('https://dhkmj1jao2.execute-api.us-east-1.amazonaws.com/test/hotels/' + hotel_id, get_fetcher);

    if (error) {
        return <h1> {error}</h1>
    }
    // // const data = await get_fetcher('/api/data')
    // // const { data, error, isLoading } = useSWR('https://dhkmj1jao2.execute-api.us-east-1.amazonaws.com/test/hotels/' + hotel_id , get_fetcher);
    // const { data ,err} = useSWR(shouldFetch?['https://dhkmj1jao2.execute-api.us-east-1.amazonaws.com/test/hotels/' + hotel_id ]:null, get_fetcher);
    // // const hotel = get_fetcher('https://dhkmj1jao2.execute-api.us-east-1.amazonaws.com/test/hotels/' + hotel_id)
    // const btnClick = () => {
    //     setFloat(float => !float);
    // };
    // {
    //     "regulation": "string",
    //     "region": "string",
    //     "road_and_number": "string",
    //     "certificate_number": null,
    //     "member_id": 1,
    //     "hotel_name": "hotel_1",
    //     "id": 1,
    //     "attraction": "string",
    //     "city": "string",
    //     "transportation": "string",
    //     "images": [
    //       "string"
    //     ],
    //     "introduction": "string"
    //   }
    return (
        
        <>
            {data?
            <>
            <Header/>
            {console.log(data)}
            <div className={style.hotelinfoSectionContainer}>
                <Searchform_2/>
                <div className={style.main}>
                    <Title 
                        name={data.hotel_name} 
                        address={data.city + data.region + data.road_and_number} 
                        img={data.images}
                    />
                    <Introduction 
                        introduction={data.introduction} 
                        facility="abc,def,ghi" 
                        attraction={data.attraction}
                    />
                    <Roominfo 
                        hotel_id={data.id}/>
                    <Evaluate
                        criticize={data.critical_number}
                    />
                    <Information
                        regulation={data.regulation}
                    />
                    <Transportation
                        transportation={data.transportation}
                    />
                </div>
            </div>
            </>
            : <h1>Loading</h1>}
        </>
        
    )
}