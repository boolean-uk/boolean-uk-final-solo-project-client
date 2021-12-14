import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([])

  const { apiUrl } = require('./utils/constant');

  console.log(apiUrl)

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProducts(data)
      })
  }, [])
  console.log("inside products", products)
  return (
    <div className="App">
      <header className="header">
        <div>
        </div>
        <div className="inside-header-grid">
          <a href="">
            <h1>The Chirstmas Jumper Company</h1>
          </a>
          <form>
            <input className="search-bar" placeholder="Search" />
          </form>
          <a href="">
            <img className="icon-img" src="https://cdn-icons-png.flaticon.com/512/2089/2089433.png" alt="Basket"></img>
          </a>
        </div>
        <div>
        </div>
      </header>
      <main className="three-col-grid">
        <div></div>
        <div>
          <section></section>
          <section className="body">
            <div >
              <form className="filter-box">
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
              <ul className="product-grid">
                {products.map((product, index) => {
                  console.log("inside map product", product)
                  return (
                    <li className="product">
                      <a href="">
                        <img className="product-img" src={product.img} alt="jumper"></img>
                        <p>{product.name}</p>
                        <p>£{product.price}</p>
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
