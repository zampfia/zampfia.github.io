import Link from "next/link";
import "../styles/footer.css";
import "../styles/layout.css";

const StickyFooter = () => {
    return (
        <footer>
            <Link className="link" href="/zampacy">
                Zampacy Policy
            </Link>
            <Link className="link" href="/privacy">
                Privacy Policy
            </Link>
        </footer>
    );
};

export default StickyFooter;
