
import Footer from './Footer';
import Header from './Header';
import Spinner from './Spinner';


function Layout({children}) {
    return (
        <>
            <Spinner />
            <Header/>
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;