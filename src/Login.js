import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Login extends Component{

  constructor(props) {
    super(props);
    this.state = {
      first: 0,
      second: 0,
      sum: 0
    };
  }

  handleFirstNumber = event => {
    this.setState({
      first: Number(event.target.value)
    });
  };

  handleSecondNumber = event => {
    let second = event.target.value;
    if(!Number(second))
    {
      alert("Your Password must be a number");
    }
    this.setState({
      second: Number(event.target.value)

     
    });

    
  };

  hanndleClick = () => {
    let x = this.state.first + this.state.second;
    this.setState({
      sum : x
    });
  };

  render(){
    return(
        <div className="container" style={{width: 500, height: 100,position:'absolute',top:'25%',left:'30%'}}>
          <div className="card" >
            <div className="card-header text-center"  style={{backgroundColor: "lightblue"}}>
              Login
            </div>
            <div className='card-body '>
              <div className='row'>
                
                <input type='text'  className="form-control"  placeholder='Username' onChange={this.handleFirstNumber}/>
                <br/>
                <br />
               
                <input type='Password'  className="form-control"  placeholder='Password' onChange={this.handleSecondNumber}/>
                <br/>
                <br />
                <input type='button' value=' Submit ' className=" btn-success" onClick={this.hanndleClick}/>
                
                <br />
                </div>
                <input type='checkbox'  /><label> Remember me...</label>
                <br/>
               
              
            </div>
          </div>
        </div>
    );
  }
}

export default Login;
