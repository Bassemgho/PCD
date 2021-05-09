import React, {Component} from 'react';
import{Bar,Doughnut,Line,Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
          chartData:{
            labels: ['Janvier', 'Février', 'Mars'],
            datasets:[
              {
                label:'Montant de Vente / mois',
                data:[
                  617594,
                  181045,
                  153060,
                  
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)'
                ]
              }
            ]
          }
        }
        }
        static defaultProps = {
          displayTitle:true,
          displayLegend: true,
          legendPosition:'right',
          location:'City'
        }
    
      render(){
        return (
          <div className="chart">
            <Bar
              data={this.state.chartData}
              options={{
                title:{
                  display:this.props.displayTitle,
                  text:'Largest Cities In '+this.props.location,
                  fontSize:25
                },
                legend:{
                  display:this.props.displayLegend,
                  position:this.props.legendPosition
                }
              }}
            />
            <br/><br/>
            
            <Doughnut
            data={this.state.chartData}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Largest Cities In '+this.props.location,
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