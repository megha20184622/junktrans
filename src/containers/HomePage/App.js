import "./App.css";
import "./homepage.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Financials from "./Financials";
import Loginpage from "../LoginPage/Loginpage";
import Menu from "../../components/Menu/Menu"
import Header from "../../components/Header/Header"
function App() {

  return (
    <div>
      <Header />
      <Menu />
      {/* <Financials />
          <Router>
            <Route exact path="/" component={Loginpage} />
          </Router> */}

      <span className="rewardPoints">Current Reward Points: 40 Points</span>
      <div class="grid-container">
        {/* <header class="row">
          <div>
            <a class="brand" href="index.html">RRR</a>
          </div>
          <div>
            <a href="cart.html">Cart</a>
            <a href="../template/containers/index.html">Sign In</a>
          </div>
        </header> */}
        <main>
          <div>
            <div class="row center">
              <div class="card">
                <a href="product.html">
                  <img className="medium" src="./images/recycleplasticbottles.jpg" alt="item" />
                </a>
                <div class="card-body">

                  <h2>PLASTIC</h2>

                  <div class="rewardprice">10 POINTS</div>
                  <div className="addCart">
                    <a href="cart.html">
                      <h2>ADD CART</h2>
                    </a>
                  </div>
                </div>
              </div>
              <br />

              <div class="card">
                <a href="product.html">

                  <img class="medium" src="./images/ahorro.png" alt="item" />
                </a>
                <div class="card-body">

                  <h2>METALS</h2>

                  <div class="rewardprice">20 POINTS</div>
                  <div className="addCart">
                    <a href="cart.html">
                      <h2>ADD CART</h2>
                    </a>
                  </div>
                </div>
              </div>
              <br />

              <div class="card">
                <a href="product.html">

                  <img class="medium" src="./images/Glass-Recycling-311x245.jpg" alt="item" />
                </a>
                <div class="card-body">

                  <h2>GLASS</h2>


                  <div class="rewardprice">30 POINTS</div>
                  <div className="addCart">
                    <a href="cart.html">
                      <h2>ADD CART</h2>
                    </a>
                  </div>
                </div>
              </div>
              <br />

              <div class="card">
                <a href="product.html">
                  <img class="medium" src="./images/recycling-companies-recycling-programs.jpg" alt="item" />
                </a>
                <div class="card-body">

                  <h2>WRAPPERS</h2>

                  <div class="rewardprice">40 POINTS</div>
                  <div className="addCart">
                    <a href="cart.html">
                      <h2>ADD CART</h2>
                    </a>
                  </div>
                </div>
              </div>
              <br />

              <div class="card">
                <a href="product.html">
                  <img class="medium" src="./images/clothrecycle.jpg" alt="item" />
                </a>
                <div class="card-body">

                  <h2>CLOTH</h2>


                  <div class="rewardprice">50 POINTS</div>
                  <div className="addCart">
                    <a href="cart.html">
                      <h2>ADD CART</h2>
                    </a>
                  </div>
                </div>
              </div>
              <br />

              <div class="card">
                <a href="product.html">
                  <img class="medium" src="./images/paper-waste-blue-bin-waste-sorting-and-recycling.jpg"
                    alt="item" />
                </a>
                <div class="card-body">

                  <h2>PAPER</h2>

                  <div class="rewardprice">60 POINTS</div>
                  <div className="addCart">
                    <a href="cart.html">
                      <h2>ADD CART</h2>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer class="row center">All right reserved</footer>
      </div>
    </div>

  );
}

export default App;
