import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Experience />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
