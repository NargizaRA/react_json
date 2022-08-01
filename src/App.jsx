import Books from "./books.json";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Bestseller Books</header>
      <div className="container">
        {Books &&
          Books.map((books) => {
            return (
              <div className="box" key={books.id}>
                <Card books={books} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;