import style from "../../../../styles/layout/home.module.css"
import Left from "./room"
import Right from "./book"

import {useState} from "react"
import useSWR from "swr"

export default function roominfo(props) {
    // const [shouldFetch, setShouldFetch]=useState(true);
    const [list, setList] = useState([]);

    const id = props.hotel_id;
    console.log(id.toString())
    // var list=[];

    const room_fetcher = (url) => 
        fetch(url) //+ '?' + ( new URLSearchParams( hotel_id ) ).toString())
        .then(response => response.json());
        // .then((response) => {
        //     setList(list.concat(response.items));
        //     console.log(list);
        //     setShouldFetch(shouldFetch => !shouldFetch);
        // });
    
    // const { data, error } = useSWR(shouldFetch?['https://dhkmj1jao2.execute-api.us-east-1.amazonaws.com/test/room/' ,{hotel_id:1}]:null, room_fetcher);
    const { data, error } = useSWR(['https://dhkmj1jao2.execute-api.us-east-1.amazonaws.com/test/room/?hotel_id='+id+'&page=1&size=50'], room_fetcher);
    
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <>{ data?
            <div className={style.roominfo}>
                <div className={style.title}><p>房型</p></div>
                <div className={style.left}>
                    {console.log(data)}
                    {data.items.map((object) => ( 
                        <Left className={style.left} room_info={object}/>
                    ))}
                </div>
                <Right className={style.right}/> 
            </div>
            : <h1>Loading</h1>}
        </>
    )
}