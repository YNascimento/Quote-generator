import React, {Component} from 'react';
import './styles.css';

export default class Main extends Component{
    constructor(){
        super()
        this.state = {
            quote: 'Quote test',
            author: 'Author test',
            allQuotes: ["Quote 1", "Quote 2", "Quote 3", "Quote 4", "Quote 5", "Quote 6", "Quote 7", "Quote 8", "Quote 9", "Quote 10"],
            allAuthors: ["Author 1", "Author 2", "Author 3", "Author 4", "Author 5", "Author 6", "Author 7", "Author 8", "Author 9", "Author 10"]
        }
    }
    componentDidMount(){
        this.loadQuote()
    }
    getRandomQuote(){
        console.log(Math.floor(Math.random()* this.state.allQuotes.length))
        return Math.floor(Math.random()* this.state.allQuotes.length)
    }
    loadQuote(){
        let num = this.getRandomQuote()
        this.setState({
            quote: this.state.allQuotes[num],
            author: this.state.allAuthors[num]
        })
    }
    render(){
        return(
            <div id="quote-box" className="App">
                <h4>Click on "New Quote"</h4>

                <div id="quote">
                    <p id="text">"{this.state.quote}"</p>
                    <small id="author">{this.state.author}</small>  
                </div>
                
                <div id="buttons">
                    <button className="button" id="new-quote" onClick={this.loadQuote.bind(this)}>Change Quote</button>

                    <a href="/insert" className="button">Insert New Quote</a>

                    <a href="/twitter.com/intent/tweet" className="button" id="tweet-quote" target="_blank">
                    Tweet Quote
                    </a>
                </div>
            </div>
        )
    }

}

