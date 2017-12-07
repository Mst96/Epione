import React from 'react';
import Tile from "./includes/Tile";
import { IndexLink, Link } from "react-router";
import Fetch from 'react-fetch';
import TodoItems from './includes/TodoItems';
let profile = require('../../profile-test.json');



export default class Symptom extends React.Component {
    constructor(props, context) {
        super(props, context);
       
        this.state = {
          items: []
        };
       
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
      }

      addItem(e) {
        var itemArray = this.state.items;
       
        if (this._inputElement.value !== "") {
          itemArray.unshift(
            {
              text: this._inputElement.value,
              key: Date.now()
            }
          );
       
          this.setState({
            items: itemArray
          });
       
          this._inputElement.value = "";
        }
       
        console.log(itemArray);
         
        e.preventDefault();
      }

      deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }

     
    render(){
        console.log(profile);
        return (

          <div class="col-sm-3 col-lg-6">
          <div class="block">
              <btitle>Symptoms</btitle>
              <hr/>


            <div className="todoListMain">

              
              <div className="header">
                <form onSubmit={this.addItem}>
                  <input ref={(a) => this._inputElement = a} 
                          placeholder="Enter Symptom">
                  </input>
                  <button type="submit">add</button>
                </form>
              </div>

              
              <TodoItems entries={this.state.items}
                           delete={this.deleteItem}/>

                           
            </div>

            </div>
        </div>
            
            
          );
        }
    
    ComponentDidMount() {
    // fetch('https://epione.oobazee.com/profile-test.json')
    // .then(results =>{ 
    //     return results.json();
    // }).then(data =>{
    //     let profile = data.results.map((item)=>{
    //         return(
    //             <div key={item.user.displayName}>
    //             </div>
    //             )
    //     })
    // })
    
    }
    
    }