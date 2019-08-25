import React, { Component } from 'react';
import "./Products.css"
import Shows from '/home/natasafi/Desktop/ProductSelection/product-selection/src/data.json'

const data = JSON.stringify(Shows)
const parsed = JSON.parse(data)

class Products extends Component {
  state = {
    shows: parsed
  }
  render() {
  
    return (
      <main>

        <div id='sports'>
          <h3>Sports TV</h3>
          <ul>
            {this.state.shows.map(show => {
              if (show.type === 'sports') {
                return <li key={show.id}>{show.title}</li>
              }
            })}
          </ul>
        </div>
        <div id='news'>
          <h3>News TV</h3>
          <ul>
            {this.state.shows.map(show => {
              if (show.type === 'news') {
                return <li key={show.id}>{show.title}</li>
              }
            })}
          </ul>
        </div>
      </main>
    );
  }
  }


export default Products;