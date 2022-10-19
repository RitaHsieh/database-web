import style from "../styles/Section.module.css"
import Search from "../component/searchform"

export default function Section() {
    return(
        <html>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet"/>
            </head>
            <body>
                <div className={style.herocontainer}>
                    <img className={style.background} src="background.jpg" alt='alter'/>
                    <h1>Rent You on Sunday</h1>
                    <Search/>
                    
                    
                </div>
            </body>
        </html>
    )
}