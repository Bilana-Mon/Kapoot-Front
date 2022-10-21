import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
