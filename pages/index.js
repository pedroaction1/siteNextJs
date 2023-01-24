import Link from 'next/link';
import Header from '../components/HeaderComponent/Header';
import Login from '../components/LoginComponent';
import Head from 'next/head'

export default function Main() {
    return (
        <div>
            <Header>
            <Head>
                <title>AutoSecretary</title>
            </Head>
          </Header>
          <Login></Login>
        </div>
        
    )
}

