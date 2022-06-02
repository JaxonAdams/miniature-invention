import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Rsvp from './components/Rsvp';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Rsvp />
      <Countdown />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
