import React, {Component} from "react";
import {connect} from "react-redux";

//hoc to clarify if the user is logged in, redirects if otherwise
//Unfortunately I have a tendency to not use this
//TODO use this. 

export default function withAuth(ComponentAuth){

  class Authenticate extends Component {
    componentWillMount(){
      if(!this.props.isAuthenticated){
        this.props.history.push("/signin");
        console.log(this.props);
      }
    }
    componentWillUpdate(){
      if(!this.props.isAuthenticated){
        this.props.history.push("/signin");
      }
    }
    render(){
      return <ComponentAuth {...this.props} />
    }
  }

function mapStateToProps(state){
  return{
    isAuthenticated: state.currentUser.isLoggedIn
  }
}

  return connect(mapStateToProps)(Authenticate);
}
