import "./styles/globals.css"
import StickyFooter from "./stickyFooter"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <StickyFooter />
      </body>
    </html>
  )
}
