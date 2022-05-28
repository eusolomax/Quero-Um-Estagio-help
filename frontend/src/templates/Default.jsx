import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
  
export default function Default({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}