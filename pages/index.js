import Head from "next/head";
import Listings from "../components/Listings";

const LISTINGS_ENDPOINT = "/api/listings";

export default function Home() {
    return (
        <div className="home__container">
            <Head>
                <title>GTAU Front-End Test</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/css/variables.css" />
                <link rel="stylesheet" href="/css/globals.css" />
                <link rel="stylesheet" href="/css/home.css" />
                <link rel="stylesheet" href="/css/listings.css" />
            </Head>

            <div className="home__content">
                <Listings
                    dataEndpoint={LISTINGS_ENDPOINT}
                    keyword="Ferrari"
                    location="Australia"
                ></Listings>
            </div>
        </div>
    );
}
