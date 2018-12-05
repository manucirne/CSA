import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    
    super(props);
    this.state = {
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'bottom',
  }

  render(){
    return (
      <div className="chart">
        <Pie
          data={this.props.alimentos}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Total CSA-SP (kg)',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

      </div>
    )
  }
}

export default Chart;