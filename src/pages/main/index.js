import React, {Component} from 'react';
import './styles.css';

function changeDisplay(){
    const showQuote = document.getElementById('showQuote')
    const addQuote = document.getElementById('addQuote')

    if(showQuote.classList.contains('hide')){
        showQuote.classList.remove('hide')
        addQuote.classList.add('hide')
    }
    else if(addQuote.classList.contains('hide')){
        addQuote.classList.remove('hide')
        showQuote.classList.add('hide')
    }
}

class AddQuote extends Component{
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
        const {newQuote, newAuthor} = this.state
        this.props.onCreateNewQuote(newQuote, newAuthor)
    }
    render(){
        return(
            <div id="insertQuote">
                <h4>Insert New Quote</h4>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div id="quote" className="inputQuote">
                        <input type='text' placeholder="Insert the Quote" name="newQuote" onChange={this.handleChange.bind(this)}/>
                        <input type='text' placeholder="Insert the Author" name="newAuthor"onChange={this.handleChange.bind(this)}/>
                    </div>
                    
                    <div id="buttons">
                        <button className="button" type="submit">Insert</button>
                        <button className="button" onClick={changeDisplay}>Back</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default class Main extends Component{
    constructor(){
        super()
        this.state = {
            quote: 'Quote test',
            author: 'Author test',
            allQuotes: ["Quote 1", "Quote 2", "Quote 3"],
            allAuthors: ["Author 1", "Author 2", "Author 3"]
        }
        this.handleNewQuote = this.handleNewQuote.bind(this)
    }
    componentDidMount(){
        this.loadQuote()
    }
    getRandomQuote(){
        return Math.floor(Math.random()* this.state.allQuotes.length)
    }
    loadQuote(){
        let num = this.getRandomQuote()
        this.setState({
            quote: this.state.allQuotes[num],
            author: this.state.allAuthors[num]
        })
    }
    handleNewQuote(newQuote, newAuthor){
        this.setState({
            allQuotes: [...this.state.allQuotes, newQuote],
            allAuthors: [...this.state.allAuthors, newAuthor]
        })
    }
    render(){
        return(
            <div>
                <div id="showQuote" className="box">
                    <h4>Click on "New Quote"</h4>
                    <div id="quote">
                        <p id="text">"{this.state.quote}"</p>
                        <small id="author">{this.state.author}</small>  
                    </div>
                    
                    <div id="buttons">
                        <button className="button" id="new-quote" onClick={this.loadQuote.bind(this)}>Change Quote</button>

                        <button className="button" onClick={changeDisplay}>Insert New Quote</button>

                        <a href="/twitter.com/intent/tweet" className="button" id="tweet-quote" target="_blank">
                        Tweet Quote
                        </a>
                    </div>
                </div>
                <div id="addQuote" className="box hide">
                    <AddQuote onCreateNewQuote={this.handleNewQuote} />
                </div>
            </div>

        )
    }

}

