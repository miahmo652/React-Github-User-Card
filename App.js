import React from "react";
import axios from "axios"
import "./styles.css";

class App extends React.Component {
  state = {
    users: [],
    me: []
  };

  componentDidMount() {
    console.log("componentDidMount running");
    axios
      .get("https://api.github.com/users/miahmo652/following")
      .then(res => {console.log(res.data);
      this.setState({users: res.data})
      }
      
      )
      .catch(err => console.log(err));


      axios
      .get("https://api.github.com/users/miahmo652/following")
      .then(res => {console.log(res.data);
      this.setState({me: res.data})
      }
      
      )
      .catch(err => console.log(err));

  }
 
  
  render(){
    return(
      <div>
        <h1> User</h1>
        {this.state.me.map(me=>{
          return(<div>
            </div>)
        })}
        <h2>Following</h2>
        {this.state.users.map(user =>{
        return(<div className="users">
              <h3>{user.login}</h3>
            <img width="200" src={user.avatar_url} key={user.avatar_url} alt="pictures"/>
        
              </div>
              
          )
      })}
      </div>
    )
  }
}

export default App;