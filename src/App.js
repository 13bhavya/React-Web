import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skill from './components/Skill';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';


function App() {
  return (
    <main className="text-gray-100 bg-gray-900">
      <Navbar />
      <About />
      <Projects />
      <Skill />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
