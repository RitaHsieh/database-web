import style from "/styles/intro.module.css"

export default function intro(props) {
    return(
        <div className={style.container}>
            <hr className={style.line1}></hr>
            <h1 className={style.title}>{props.title}</h1>
            <p className={style.content}>{props.content}</p>
        </div>
    )
}

