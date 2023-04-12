import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import Nav from '../components/Nav'

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Simple Post Apps</title>
            </Head>
            <ChakraProvider>
                <Nav/>
                <Component {...pageProps}/>
            </ChakraProvider>
        </>
    );
}

export default MyApp;