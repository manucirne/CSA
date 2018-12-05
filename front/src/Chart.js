import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart1 extends Component{
  constructor(props){
    
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
//console.log(this.state.chartData)
  
}


  static defaultProps = {
    displayTitle:true,
    displayLegend: false,
    legendPosition:'bottom'
    
  }



  render(){
    return (
      <div className="chart">
        <Bar
          data={this.props.kg}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Total Usuário',
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

export default Chart1;