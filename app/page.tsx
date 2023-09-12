import dynamic from "next/dynamic";
import "./styles/page.css";
import ScrollingImages from "./components/scrollingImages";

const ImageContainer = dynamic(() => import("./components/imgContainer"), {
    ssr: false,
});

export default function HomePage() {
    return (
        <div className="margin">
            <h1 className="my-3 text-4xl font-bold">ZAMPA E' IL PIU' GRANDE</h1>
            <ImageContainer />
            <ScrollingImages />
        </div>
    );
}
