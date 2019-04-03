import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function Math(){
  let x=5, y=10;
  return x+ y;

}


let person = ( <
 div className = "myclass" >
 <
 h1 > Hello world! < /h1> <
 p > This is my first react app < /p> <
 /div>
);

function Person(props){
  return(
    <div className = "girls">
    <h1>{props.name}</h1>
    <p>Age:{props.age}</p>
    <p>Hair color: {props.color}</p>
    </div>);
}

var data = (
  <div>
  <Person name="Maria" age="29" color="blonde"/>
  <Person name="Kitty" age="25" color="black"/>
  <Person name="Sini" age="27" color="brown"/>
  </div>
);


ReactDOM.render(<Math />, document.getElementById('root'));
ReactDOM.render(<person />, document.getElementById('person'));
ReactDOM.render(data, document.getElementById('data'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
