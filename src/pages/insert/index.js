import React, {Component} from 'react';
import './styles.css';

export default class Insert extends Component{
    constructor(){
        super()
        this.state = {
            newQuote: '',
            newAuthor: ''
        }
    }
    handleChange(e){
        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]:value
        })
    }
    handleSubmit(e){
        e.preventDefault()
    }
    render(){
        return(
            <div id="quote-box" className="App">
                <h4>Insert New Quote</h4>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div id="quote" className="inputQuote">
                        <input type='text' placeholder="Insert the Quote" name="newQuote" onChange={this.handleChange.bind(this)}/>
                        <input type='text' placeholder="Insert the Author" name="newAuthor"onChange={this.handleChange.bind(this)}/>
                    </div>
                    
                    <div id="buttons">
                        <input className="button" type="submit"></input>
                        <a href="/" className="button">Back</a>
                    </div>
                </form>
            </div>
        )
    }

}

