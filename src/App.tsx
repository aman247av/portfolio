import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Experience from './components/Experience';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Experience, then the work in depth.
 *
 * Work led for a while, back when Experience came first and Work was framed as
 * "products built outside the day job" — the nav sent recruiters to side
 * projects. That framing is gone and the hero already names NAVIOM and LinkedIn
 * above the fold, so the reason for the inversion went away. Reading the roles
 * first also gives the Flink case study its context: it is the MAQ engagement,
 * and you now know that before you reach it rather than after.
 */
export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Experience />
        <Work />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
