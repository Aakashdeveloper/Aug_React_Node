import React,{Fragment,Component} from 'react';
import './Header.css';

class Header extends Component{
    constructor(props){
        super(props)

        this.state={
            title:'My React App',
            keyword:'User Text Here'
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        this.props.userText(event.target.value)
    }

    render(){
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input type="text" onChange={this.handleChange}/>
                        <p>{this.state.keyword}</p>
                    </center>
                </header>
                <hr/>
            </Fragment>
        )
    }
}
export default Header;