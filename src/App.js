import About from "../src/component/About/About";
import "./App.css";
import Blog from "../src/component/Blog/Blog";
import Contact from "../src/component/Contact/Contact";
import Footer from "../src/component/Footer/Footer";
import Home from "../src/component/Home/Home";
import Project from "../src/component/Project/Project";
import Service from "../src/component/Service/Service";

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Service />
       <Project />
       <Blog />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
