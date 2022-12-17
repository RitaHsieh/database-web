import style from "../../../styles/layout/home.module.css"

export default function information() {
    const options = [
        {title: '入住時間', content: 'xxx'},
        {title: '退房時間' , content: 'xxx'},
        {title: '訂金/退金政策' , content: 'xxx'},
        {title: '吸菸管制' , content: 'xxx'},
        {title: '孩童加床選項' , content: 'xxx'},
        {title: '寵物' , content: 'xxx'}
      ];

    return (
        <>
        
        <div className={style.hotelInfoInformation}>
                <h1 className={style.title}>入住須知</h1>
                <div className={style.searchcontainer}>
                    {options.map(option=>(
                        <div className={style.searchcontainerALL}>
                            <div className={style.searchcontainerTitle}>
                                <p className={style.name}>{option.title}</p>
                            </div>
                            <div className={style.searchcontainerName}>
                                <p className={style.name}>{option.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        
        </>
    )

}