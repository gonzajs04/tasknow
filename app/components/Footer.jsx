import { getPresentDate } from "../helpers/app"
export default function Footer(){
    return(
        <footer className="footer" >
            <p className="copy">{getPresentDate()} &copy;</p>
        </footer>
    )
}