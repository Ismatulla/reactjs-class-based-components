import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="card">
        <Note />
      </div>
      <Footer />
    </div>
  );
}

export default App;
