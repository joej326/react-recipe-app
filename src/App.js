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
        ingredients: ['Brown Hair1', 'Glasses1', 'intelligence1']
      },
      {
        recipeName: 'Joe2',
        ingredients: ['Brown Hair2', 'Glasses2', 'intelligence2']
      },
      {
        recipeName: 'Joe3',
        ingredients: ['Brown Hair3', 'Glasses3', 'intelligence3']
      }
    ]
  }

  deleteRecipe(ingredientNumber){
    let recipe = this.state.recipes;
    for(let i = 0;i<recipe.length;i++){
      if(i === ingredientNumber){
        recipe.splice(i,1);
        this.setState({
          recipes: recipe
        })
      }
    }
  }


  render() {

    const {recipes} = this.state;
    console.log(recipes);

    return (
      <div className="App container">
        <Accordion bsStyle='danger'>
          {recipes.map((recipe, i)=>(
            <Panel header={recipe.recipeName} eventKey={i} key={i}>
              <ol>
                {recipe.ingredients.map((ingredient, i)=>(
                  <li key={i}>{ingredient}</li>
                ))}
              </ol>
              <ButtonToolbar>
                <Button onClick={()=>(this.deleteRecipe(i))} bsStyle='danger'>Delete Recipe</Button>
                <Button bsStyle='primary'>Edit Recipe</Button>
              </ButtonToolbar>
            </Panel>
          ))}
        </Accordion>
        <Button bsStyle='primary'>Add Recipe</Button>
      </div>
    );
  }
}

export default App;
