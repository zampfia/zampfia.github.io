import "@/styles/globals.css";
import StickyFooter from "@/components/stickyFooter";
import Layout from "@/components/layoutMenu";

export const metadata = {
    title: "Zampa è bravo",
};

export default function RootLayout({ children }) {
    return (
        <html data-theme="primary_theme" lang="en">
            <body>
                <Layout />
                {children}
                <StickyFooter />
            </body>
        </html>
    );
}
