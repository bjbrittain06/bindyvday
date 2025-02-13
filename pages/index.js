import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Valentine's Day</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-content">
        <Header title="Welcome to my Valentine's Day page!" />
        <div className="audio-player">
          <audio controls>
            <source src="/public/CandC.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </main>

      <Footer />
    </div>
  );
}
