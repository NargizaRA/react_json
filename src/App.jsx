import Books from './books.json'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Bestseller Books</header>
      <div className="container">
      {Books && Books.map( books =>{
        return  (        
          <div className="box" key={books.id}>
           <img src={books.image} alt="books"/>
           <div className="card">
            <h2>{books.title}</h2>
            <h4>{books.author}</h4>
            <div className="details">{books.details && books.details.map(data => {
              return(
                <div key={books.id}>
                  <p>{data.genre}</p>
                  <p>{data.year}</p>
                  </div>              
              )
            })}</div>
            </div>
            </div>    
    )
    })
    }
    </div>
    </div>
  );
}

export default App;
