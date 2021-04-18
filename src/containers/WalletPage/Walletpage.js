import React from 'react';
import './Wallpage.css';
import Menu from "../../components/Menu/Menu"
import Header from "../../components/Header/Header"
import api from '../../config/api'
import { Component } from 'react';

class WalletPage extends Component{
  constructor(props) {
    super(props);
    this.state =
    {
      userdata: [],
      debit: []
    };
    this.getUserData = this.getUserData.bind(this);
    this.getDebitData = this.getDebitData.bind(this);
  }

  async componentDidMount() {
    var getUserDetails = await this.getUserData();
    var getDebitVal = await this.getDebitData();
    this.setState({ userdata: getUserDetails, debit: getDebitVal});
  }

  
  async getUserData() { 
    const json = await fetch(api.totalBalances, {
    method: 'GET',
    headers: new Headers({
    'Content-Type': 'application/json'})
    }).then(resp => resp.json());
    return json;
   
  }

  async getDebitData() { 
    const json = await fetch(api.debit, {
    method: 'GET',
    headers: new Headers({
    'Content-Type': 'application/json'})
    }).then(resp => resp.json());
    return json;
   
  }
 
  render() {
    if (this.state.userdata[0]) {
      const data = this.state.userdata[0];
      let bank = [3];
      bank=this.state.debit[0]; 
      return (
      <div>
        <Header/>
        <Menu/>
    <div className ="Main">
    <div className="Head">
      <h5 className = "h5">My Accounts</h5>
          <div className = "para">
            <p className ="hp1">&nbsp;&emsp;Total Balance &emsp;&emsp; Total Accounts</p>
            <p className ="hp2">&#163; { data.userData[0].totalAvailableDebitBalance } &emsp;&emsp;&emsp;{data.userData[0].noOfDebitAccounts}</p>
            <p></p>
          </div>
    </div>
    <div className="cardInfo1">
    <img id="myImg" src={`./homeassets/debit0.png`}  width="310" height="120" alt="Card1"/>
    <p className="cp1">&emsp;{bank.banks[0].bankName}</p>
    <p className="cp2">&emsp;{bank.banks[0].accounts[0].interestRate} %AER</p>
    <p className="cp3">Total Balance  &nbsp;&nbsp;&nbsp;&emsp;&emsp;Payment Instructions</p>
    <p className = "cp4v1">&emsp;&#163; {bank.banks[0].accounts[0].balance}  &emsp;&emsp;&emsp; &#163; {bank.banks[0].accounts[0].standingInst}  </p>
    <a  className= "Link1" href="https://">View Details</a>
    <p className="cp5">&nbsp;Minimum Balance &emsp; Unutilized Balance </p>
    <p className= "cp6v2">&emsp;&#163; {bank.banks[0].accounts[0].minBalance}&nbsp;&nbsp;&nbsp;&emsp; &#163; {bank.banks[0].accounts[0].availableBalance} </p>
    <button className="button">OPTIMIZE</button>
    </div>
    
    <div className="cardInfo2">
    <img id="myImg1" src={`./homeassets/debit1.png`}  width="287" height="120" alt="Card2"/>
    <p className="cp1">&emsp;{bank.banks[1].bankName}</p>
    <p className="cp2">&emsp;{bank.banks[1].accounts[0].interestRate} %AER</p>
    <p className="cp3">Total Balance &nbsp;&nbsp;&nbsp;&emsp;&emsp; Payment Instructions</p>
    <p className = "cp4v1">&emsp;&#163; {bank.banks[1].accounts[0].balance}  &emsp;&emsp; &#163; {bank.banks[1].accounts[0].standingInst}  </p>
    <a  className= "Link2" href="https://">View Details </a>
    <p className="cp5">&nbsp;Minimum Balance &emsp; Unutilized Balance </p>
    <p className= "cp6v2">&emsp;&#163; {bank.banks[1].accounts[0].minBalance}&nbsp;&nbsp;&nbsp;&emsp;&emsp; &#163; {bank.banks[1].accounts[0].availableBalance} </p>
    <button className="button">OPTIMIZE</button>
    </div>

    <div className="cardInfo3">
    <img id="myImg1" src={`./homeassets/debit2.png`}  width="287" height="120" alt="Card2"/>
    <p className="cp1">&emsp;{bank.banks[2].bankName}</p>
    <p className="cp2">&emsp;{bank.banks[2].accounts[0].interestRate} %AER</p>
    <p className="cp3">Total Balance &nbsp;&nbsp;&nbsp;&emsp;&emsp; Payment Instructions</p>
    <p className = "cp4v1">&emsp;&#163; {bank.banks[2].accounts[0].balance}  &emsp;&emsp; &#163; {bank.banks[2].accounts[0].standingInst}  </p>
    <a  className= "Link2" href="https://">View Details </a>
    <p className="cp5">&nbsp;Minimum Balance &emsp; Unutilized Balance </p>
    <p className= "cp6v2">&emsp;&#163; {bank.banks[2].accounts[0].minBalance}&nbsp;&nbsp;&nbsp;&emsp;&emsp; &#163; {bank.banks[2].accounts[0].availableBalance} </p>
    <button className="button">OPTIMIZE</button>
    </div>

    </div>
    </div>   
  );
  }
  else{
    return(
    <div className='Else'>
    <h1>LOADING ...</h1></div>
    )
  }
}
}

export default WalletPage;

