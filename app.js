// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class TodoListItem extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
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

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none' 
    };
    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );

  }

}

// Update our `TodoList` to use the new `TodoListItem` component
// This can still be a stateless function component!
var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  //create a class that is component that will have dynamic access to variables
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
    //construct via componenet class, passign props as arg
  }
  onListItemMouseOver(){
    this.setState({done: !this.state.done});
  }

  render() {

    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseOver={this.onListItemMouseOver.bind(this)}>{this.props.grocery}</li>
      );
    //when rendering, access this.props.todo variable (which we can change dynamically)
  }
}

var GroceryList = (props) => (
  <ul>
      {props.grocery.map(grocery => 
      <GroceryListItem grocery={grocery} />
    )}
  </ul>
);
//for each groceryList item, 

// var App = () => (
//   <div>
//     <h2>My TodoList</h2>
//     <TodoList todos={['Nice', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
//   </div>
// );

var App = () => (
  <div>
    <h2>My GroceryList</h2>
    <GroceryList grocery={['Nice', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));


//todos is an object that has 3 properties. 


// //and again
// //lowercase c class
// class GroceryListItem = extends React.component.extend{
//   constructor(props){
//     super(props);
//     //
//     this.state = {
//       done: false
//     };
//   }

//   onListItemMouseOver() {
//     this.setState({done: !this.state.done};
//   }

//   render(){
//     var style = {
//       fontWeight: this.state.done ? 'bold': 'normal'
//     };
//     return <li style={style} onMouseOver = {this.onListItemClick.bind(this)}> {this.props.grocery}</li>
//     //style object

//   }
// }

// var GroceryList = (props) => (
//   <ul> 
//     {props.groceries.map( (grocery) => 
//       <GroceryListItem grocery = {grocery}/>
//       );
//     }
//   </ul>
// );
//grocery list creates instance of grocery list item, styling the component as shown
// //referencing an object props that maps each grocery to a component within the larger list

// var App = () => (
//   <GroceryList grocery={['test1', 'test2', 'test3']}/>
// );
// //creates instance of grocerylist to render correct groceries with those passsed
