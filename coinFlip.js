
class CoinFlip extends React.Component{
    //this is a child or subclass; it's a child of React.component
    //react.component is the parent or super class
    //we get all the cool stuff because it's a subclass
    constructor(){
        super();
        //react doesn't care about this at all. This is regular JS.
        this.heads = "buffalo-nickel-heads.jpg"
        this.tails = "buffalo-nickel-tails.png"
        this.coin = [
            this.heads,
            this.tails
        ]
        //react cares about state *a lot*. React is special
        this.state= {
            image: this.coin[0]
        }
        }
    render(){
        //it is render's job to return a single DOM element!!
        //whether you like it or not, render will run right after the constructor;
        return(
            <div className="coin-flip">
                <button>Flip!</button>
                <img src={this.state.image} />
            </div>
        )
    }
}



//reactDOM.render takes 2 things: WHAT and WHERE
ReactDOM.render(
    <CoinFlip />,
    document.querySelector('#root')
)
