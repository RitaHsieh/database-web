import style from "../../styles/layout/home.module.css"

//test

export default function intro(props) {

    const content=[style.content,style.hidden]
    const title = [style.title,style.hidden]
    const line1 =[style.line1,style.hidden]

    return(
        <div className={style.homeIntroContainer}>
            <hr className={line1[props.number==true?0:1]}></hr>
            <h1 className={title[props.number==true?0:1]}>{props.title}</h1>
            <p className={content[props.number==true?0:1]}>{props.content}</p>
        </div>
    )
}

