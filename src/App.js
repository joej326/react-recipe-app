import React, { Component } from 'react';
import './App.css';

import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Modal from 'react-bootstrap/lib/Modal';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';


class App extends Component {
  state = {
    recipes: [
      {
        recipeName: 'Joe',
        ingredients: ['Brown Hair', 'Glasses', 'intelligence']
      },
      {
        recipeName: 'Joe2',
        ingredients: ['Brown Hair', 'Glasses', 'intelligence']
      },
      {
        recipeName: 'Joe3',
        ingredients: ['Brown Hair', 'Glasses', 'intelligence']
      }
    ]
  }
  render() {

    const {recipes} = this.state;

    return (
      <div className="App">
        <Accordion>
          {recipes.map((recipe, i)=>{
            <Panel header={recipe.recipeName} eventKey={i}></Panel>
          })}
        </Accordion>
      </div>
    );
  }
}

export default App;
