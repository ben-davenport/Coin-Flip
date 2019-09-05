
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
    // flip(){
    //     console.log("Flip was clicked")
    flip = ()=>{
        console.log('Flip was clicked');
        let coinSide = Math.round(Math.random()); //0, 1
        //this is a setter
        this.setState({
            image: this.coin[coinSide],
        })
    }
    render() {
        //it is render's job to return a single DOM element!!
        //whether you like it or not, render will run right after the constructor;

        //React events are identical (mostly) to regular DOM events in 
        //that they're attached to the element, except they must be in camelCase;
        //We hand them code
        return(
            <div className="coin-flip">
                <button onClick={this.flip}>Flip!</button>
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
