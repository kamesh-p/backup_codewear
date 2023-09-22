import Head from "next/head";
import Link from "next/link";
// import Script from "next/script";
import "../app/globals.css";
import Header from "./componenets/header";
import Footer from "./componenets/footer";
import Features from "./componenets/Features";

export default function Home() {
  return (
    <div>
      <main>
        <Head>
          <title>kamesh coding hub</title>
        </Head>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH496xMPT3e61GGL9_9rECAlmiwmN1fnTidA&usqp=CAU"
          alt="t"
          width="100%"
        />
        <div>
          <Features />
        </div>
        <Footer />
      </main>
    </div>
  );
}
