import './App.css';
import hello from 'D:/meo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={hello} alt="hello" />
        <p>
          HELLO WORLD!
        </p>
        <a href="https://www.youtube.com/watch?v=nLnDm8t9Mng">Xem video trên YouTube</a>

      </header>
    </div>
  );
}

export default App;
