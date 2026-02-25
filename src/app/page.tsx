import Blog from "./components/landing/Blog";
import About from "./components/landing/About";
import Contact from "./components/landing/Contact";
import Hero from "./components/landing/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 space-y-24">
        <section id="home">
          <Hero />
        </section>
        <section id="features">
          <About />
        </section>
        <section id="projects">
          <Blog />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
