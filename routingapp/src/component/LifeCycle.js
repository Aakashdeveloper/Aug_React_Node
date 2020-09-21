// get initial state
// set initial state
// before get created
// render
// after get created

import React,{Component} from 'react';

class LifeCycle extends Component{
    //get initial state
    constructor(props){
        super(props)
        console.log("Inside constructor")
        // set initial state
        this.state={
            title:'LifeCycle Method'
        }
    }

    // before get created
    /*UNSAFE_componentWillMount(){
        console.log("Inside componentWillMount")
    }
*/
    static getDerivedStateFromProps(props,state){
        console.log("Inside getDerivedStateFromProps")
    }

    componentWillUpdate(){
        console.log("Inside componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("Inside componentDidUpdate")
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("Inside shouldComponentUpdate")
        if(nextState.title === this.state.title){
            return false
        }else{
            return true
        }
    }

    //render
    render(){
        console.log("Inside render")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success"
                onClick={() => {this.setState({title:'Something else'})}}>
                    Click Me
                </div>
            </div>
        )
    }

    //5 after get created
    componentDidMount(){
        console.log("Inside componentDidMount")
    }

    componentWillUnmount(){
        alert("Do you want to leave")
    }


}

export default LifeCycle;