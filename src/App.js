import '../src/style/main.css';
import TopMenu from './components/TopMenu';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import { CompletedProvider } from './context/Context';

function App() {
  return (
    <div className="container">
      <CompletedProvider>
        <TopMenu />
        <Hero />
        <Stats />
        <About />
      </CompletedProvider>
    </div>
  );
}

export default App;
