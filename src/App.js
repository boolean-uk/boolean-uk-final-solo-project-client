import { useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  function GetAllProducts() {
    const url = `http://localhost:3000/products`
    fetch(url)
      .then((res) => res.json())
      .then((Data) => {
        setProducts(Data)
      })
  }
  return (
    <div className="App">
      <header>
        <div>
          <a href="">
            <h1>The Chirstmas Jumper Company</h1>
          </a>
        </div>
        <div>
          <form>
            <input placeholder="Search" />
          </form>
        </div>
        <div>
          <a href="">
            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" alt="User"></img>
          </a>
          <a href="">
            <img src="https://cdn-icons-png.flaticon.com/512/860/860808.png" alt="Favourites"></img>
          </a>
          <a href="">
            <img src="https://cdn-icons-png.flaticon.com/512/2089/2089433.png" alt="Basket"></img>
          </a>
        </div>
      </header>
      <main>
        <div></div>
        <div>
          <section></section>
          <section>
            <div>
              <form>
                <select>
                  <option>Price</option>
                  <option>{`>`}£10</option>
                  <option>{`>`}£20</option>
                </select>
                <select>
                  <option>Colour</option>
                  <option></option>
                  <option></option>
                </select>
                <select>
                  <option>Something Else</option>
                  <option></option>
                  <option></option>
                </select>
              </form>
              <ul>
                {products.map((product, index) => {
                  return (
                    <li>
                      <a href="">
                        <img>{product.img}</img>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <button>
                          <img src="https://cdn-icons-png.flaticon.com/512/860/860808.png" alt="Favourites"></img>
                        </button>
                        <button>Add To Basket</button>
                      </a>
                    </li>
                  )
                })
                }
              </ul>
            </div>
          </section>
          <section></section>
        </div>
        <div></div>
      </main>
    </div>
  );
}

export default App;
