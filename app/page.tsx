import dynamic from "next/dynamic";
import "@/styles/page.css";
import ScrollingImages from "@/components/scrollingImages";

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const ImageContainer = dynamic(() => import("@/components/imgContainer"), {
    ssr: false,
});

export default function HomePage() {
    return (
        <div>
            <div className="margin">
                <h1 className="my-3 text-4xl font-bold">
                    ZAMPA E' IL PIU' GRANDE
                </h1>
            </div>
            <ImageContainer />
            <div className="margin">
                <ScrollingImages />
            </div>
        </div>
    );
}
