import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Raburii. All rights reserved.</p>
          <a href="#home" className="text-sm font-medium text-gray-700 hover:text-gray-900">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
