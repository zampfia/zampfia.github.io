import Layout from "./layoutMenu"

export default async function NotFound() {
    return (
        <div>
            <Layout />
            <h1 style={{textAlign: "center"}}>404</h1>
            <h1 style={{textAlign: "center"}}>Il sito non esiste</h1>
        </div>
    )
}