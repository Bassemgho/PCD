import React, {Component} from 'react';
import{Bar,Doughnut,Line,Pie} from 'react-chartjs-2';
//par boutique chkoun be3et akther fi nafs el chhar
class Chart2 extends Component{
    constructor(props){
        super(props);
        this.state = {
          chartData:{
            labels: ['Zen Marsa', 'Zen Bizerte', 'Zen sokra', 'Zen Sousse'],
            datasets:[
              {
                label:'Montant de Vente / mois',
                data:[
                  617594,
                  181045,
                  153060,
                  158214,
                ],
                backgroundColor:[                   
                    'rgba(54, 162, 235, 0.6)',                   
                    'rgba(255, 0, 0, 0.6)',
                    'rgba(0, 255, 0, 0.6)',         
                    'rgba(255, 0, 255, 0.6)'
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
    
    export default Chart2;