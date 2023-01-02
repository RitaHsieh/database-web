import style from "../../../styles/layout/home.module.css"

export default function transportation(props) {

    return (
        <>
        
        <div className={style.hotelInfoTransportation}>
            <h1 className={style.title}>交通</h1>
            <p className={style.name}>{props.transportation}</p>
        </div>
        
        </>
    )

}