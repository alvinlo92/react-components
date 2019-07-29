// TODO
class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            done: false
        };
    }

    onListItemClick() {
        this.setState({
            done: !this.state.done
        });
    }

    render() {
        var style = {
            fontWeight: this.state.done ? 'bold' : 'normal'
        };

        return (
            <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.grocery}</li>
        );
    }
}

var GroceryList = (props) => (
    <ul>
        {props.groceries.map(grocery =>
            <GroceryListItem key={grocery} grocery={grocery} />
        )}
    </ul>
);

ReactDOM.render(<GroceryList groceries={['Coffee', 'Tea', 'Milk']}/>, document.getElementById('app'));