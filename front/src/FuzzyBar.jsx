import React, { Component } from 'react';
import Downshift from "downshift";
import fuzzaldrin from "fuzzaldrin-plus";

const items = ["Aayla Secura", "Admiral Ackbar", "Admiral Thrawn",
                "Ahsoka Tano", "Anakin Solo", "Asajj Ventress",
                "Aurra Sing", "Senator Bail Organa", "Barriss Offee", 
                "Bastila Shan", "Ben Skywalker", "Bib Fortuna", 
                "Biggs Darklighter", "Boba Fett", "Bossk", "Brakiss",
                "C-3PO", "Cad Bane", "Cade Skywalker", "Callista Ming", 
                "Captain Rex", "Carnor Jax"]
const fuzzyFilter = input => {
  return fuzzaldrin.filter(items, input);
}

export default class FuzzyBar extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    

    render(){return(
        <Downshift onChange={selection => alert(`You selected ${selection}`)}>
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem
    }) => (
      <div>
        <label {...getLabelProps()}>Enter a Star Wars Character</label>
        <input {...getInputProps()} />
        {isOpen ? (
          <div>
            {fuzzyFilter(inputValue).map((item, index) => (
              <div
                {...getItemProps({
                  key: item,
                  index,
                  item,
                  style: {
                    backgroundColor:
                      highlightedIndex === index ? "lightgray" : "white",
                    fontWeight: selectedItem === item ? "bold" : "normal"
                  }
                })}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: fuzzaldrin.wrap(item, inputValue)
                  }}
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    )}
  </Downshift>
    )}

}