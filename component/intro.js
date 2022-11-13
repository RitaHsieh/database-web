import style from "/styles/home.css"

export default function intro(props) {

    const content=[style.content,style.hidden]
    const title = [style.title,style.hidden]
    const line1 =[style.line1,style.hidden]

    return(
        <div className={style.container}>
            <hr className={line1[props.number==true?0:1]}></hr>
            <h1 className={title[props.number==true?0:1]}>{props.title}</h1>
            <p className={content[props.number==true?0:1]}>{props.content}</p>
        </div>
    )
}

