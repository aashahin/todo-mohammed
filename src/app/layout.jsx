import "./globals.css";

export default function Layout({ children }) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}

export const metadata = {
    title: 'todo',
    description: "Todo App"
}