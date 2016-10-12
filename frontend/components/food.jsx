import React from 'react';
import {Component} from 'react'
import store from '../store'
import { addSushi, addRamen, addRiceBall, addSake, addGreenTea } from '../actions.js'

var Food = (props) => (
  <div>
    {props.foods.map(function(food, idx) {
      return (<span key={idx}>{food}</span>)
    })}
    <br/>
    <button onClick={store.dispatch.bind(this, addSake())}>Sake</button>
    <button onClick={store.dispatch.bind(this, addGreenTea())}>Green Tea</button>
    <button onClick={store.dispatch.bind(this, addRamen())}>Ramen</button>
    <button onClick={store.dispatch.bind(this, addSushi())}>Sushi</button>
    <button onClick={store.dispatch.bind(this, addRiceBall())}>RiceBall</button>
  </div>
)

export default Food;
