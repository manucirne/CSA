import React, { Component } from 'react';
import Downshift from "downshift";
import fuzzaldrin from "fuzzaldrin-plus";


export default class FuzzyBar extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
      const items = this.props.items
      const fuzzyFilter = input => {
        return fuzzaldrin.filter(items, input);
      }
      return(
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