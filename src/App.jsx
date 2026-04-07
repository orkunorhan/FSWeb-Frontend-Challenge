import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
      <Navbar />
      <Hero />
      <Skills />
      <Profile />
    </div>
  );
}

export default App;
