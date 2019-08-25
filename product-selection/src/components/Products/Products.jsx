import React, { Component } from 'react';
import "./Products.css";
import Shows from '/home/natasafi/Desktop/ProductSelection/product-selection/src/data.json';
import Checkbox from '../Checkbox';

const data = JSON.stringify(Shows)
const parsed = JSON.parse(data)

class Products extends Component {
  state = {
    shows: parsed,
    checked:false
  }
  render() {
    const data = this.state.shows
    return (
      <main>       
        <div id='sports'>
          <h3>Sports TV</h3>
          <ul>
            {data.map(show => {
              
              if (show.type === 'sports') {
                return (
                  <li key={show.id}>
                    <Checkbox className="check" handleCheckChildElement={this.handleCheckChildElement} />{show.title}</li>
                )
              }
            })}
          </ul>
        </div>
        <div id='news'>
          <h3>News TV</h3>
          <ul>
            {this.state.shows.map(show => {
              if (show.type === 'news') {
                return (<li key={show.id}>
                  <Checkbox className="check" handleCheckChildElement={this.handleCheckChildElement} />
                  {show.title}
                </li>)
              }
            })}
          </ul>
        </div>
      </main>
    );
  }

  // handleCheckChildElement = (event) => {
  //   let shows = this.state.shows
  //   shows.forEach(show => {
  //     if (show.value === event.target.value)
  //       show.isChecked = event.target.checked
  //   })
  //   this.setState({ shows: shows })
  // }
  }


export default Products;