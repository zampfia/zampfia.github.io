import "../styles/zampacy.css"
import ElementLoop from "../lib/elementLoop.js"

export default function Zampacy() {
    return(
        <div>
            <h1 id="title">NOI TENIAMO DATI<br />VOI TENETE NIENTE</h1>
            <ElementLoop count={10} />
            <text id="foot-print">Per motivi legali dobbiamo seguire i Comandamenti del Zampanesimo</text>
        </div>
    )
}