import '../styles/globals.css'
import '../styles/custom.css'
import {CookiesProvider} from "react-cookie"
import Loading from '../components/pageLoading';

function MyApp({ Component, pageProps }) {
    return(
      <CookiesProvider>
            <Loading/>
            <Component {...pageProps} />
      </CookiesProvider>
    )
}

export default MyApp
