import style from "../../../styles/layout/home.module.css"

export default function introduction(props) {

    const list_facility = props.facility.split(',');
    const list_attraction = props.attraction.split(',');

    return (
        <>
            <div className={style.hotelInfoIntroduction}>
                <p className={style.title}>旅館特色簡介</p>
                <p className={style.content}>{props.introduction}</p>
                
                <p className={style.s_title}>熱門設施</p>
                <div className={style.block}>
                    {list_facility.map((item) => ( 
                        <p>{item}</p>
                    ))}
                </div>
                
                <p className={style.s_title}>熱門景點</p>
                <div className={style.block}>
                    {list_attraction.map((item) => ( 
                        <p>{item}</p>
                    ))}
                </div>
            </div>
        </>
    )
}