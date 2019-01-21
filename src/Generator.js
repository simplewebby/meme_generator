import React from 'react'


class Generator extends React.Component {
    constructor(){
        super()
        this.state ={
            topText: '',
            bottomText: '',
            randomImg : 'http://i.imgflip.com/1bij.jpg',
            allMemesImgs : []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            const{memes} = response.data
            this.setState({allMemesImgs: memes})
    })
}
handleChange(event) {
    const{name, value} = event.target
    this.setState({[name]:value})
}

handleSubmit(event){
    event.preventDefault();
    const ranNum = Math.floor(Math.random() * this.state.allMemesImgs.length)
    const randMemeImg = this.state.allMemesImgs[ranNum].url
    this.setState({randomImg: randMemeImg})
    
}
  render() {
    return (
      <div className="generator">
        <form className="meme=form" onSubmit={this.handleSubmit} >
            <input type="text"
                    placeholder="Top Text"
                    name="topText"
                    value={this.state.topText}
                    onChange={this.handleChange}
                    /><br></br>

            <input type = "text"
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={this.state.bottomText}
                    onChange={this.handleChange}
                    /><br></br>
            <button>Generate</button>
        </form>
        <div className="meme">
            <img src={this.state.randomImg} alt="img"/>
            <h3 className="top">{this.state.topText}</h3>
            <h3 className="bottom">{this.state.bottomText}</h3>
            
        </div>
    </div>
    );
  }
}

export default Generator;
