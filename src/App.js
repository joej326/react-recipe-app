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
        ingredients: ['Brown Hair1', 'Glasses1', 'curls1']
      },
      {
        recipeName: 'Joe2',
        ingredients: ['Brown Hair2', 'Glasses2', 'curls2']
      },
      {
        recipeName: 'Joe3',
        ingredients: ['Brown Hair3', 'Glasses3', 'curls3']
      }
    ],
    showAdd: false,
    newestRecipe: {
      recipeName: '',
      ingredients: []
    }
  }

  //deletes a recipe
  deleteRecipe(ingredientNumber){
    let recipe = this.state.recipes.slice();
    for(let i = 0;i<recipe.length;i++){
      if(i === ingredientNumber){
        recipe.splice(i,1);
        this.setState({
          recipes: recipe
        })
      }
    }
  }

  //closes a modal
  closeAdd(){
    if(this.state.showAdd){
      this.setState({
        showAdd: false
      });
    }
  }
  //opens a modal
  openAdd(){
    this.setState({
      showAdd: true
    }, ()=>(console.log(this.state.showAdd)));
  }

  updateValue(value){
    this.setState({
      newestRecipe: value
    });
  }


  render() {

    const {recipes} = this.state;

    return (
      <div className="App container">
        <Accordion>
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


        {/* this modal was not working correctly in react 16
        The following code fixed the issue:
        npm install --save react@15.6.2 react-dom@15.6.2 */}
        <Modal show={this.state.showAdd} onHide={()=>this.closeAdd()}>
           <Modal.Header closeButton></Modal.Header> {/*"closeButton" adds the "x" so we can close the modal */}
           <Modal.Title>Add Recipe</Modal.Title>
           <Modal.Body>
             <FormGroup>
               <ControlLabel>Recipe Name</ControlLabel>
               <FormControl
                type='text'
                value={this.state.newestRecipe.recipeName}
                placeholder='Enter Recipe Name'
                onChange={(e)=> (this.updateValue(e.target.value))}
                 ></FormControl>
             </FormGroup>
           </Modal.Body>
        </Modal>


        <Button onClick={()=>this.openAdd()} bsStyle='primary'>Add Recipe</Button>


      </div>
    );
  }
}

export default App;
