import React, {Component} from 'react';
import{Bar,Doughnut,Line,Pie} from 'react-chartjs-2';

// class Chart extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//           chartData:{
//             labels: ['Zen Marsa', 'Zen Bizerte', 'Zen sokra', 'Zen Sousse'],
//             datasets:[
//               {
//                 label:'Rentabilité de Vente / mois',
//                 data:[
//                   617594,
//                   181045,
//                   153060,
//                   158214,
//
//                 ],
//                 backgroundColor:[
//                   'rgba(54, 162, 235, 0.6)',
//                     'rgba(255, 0, 0, 0.6)',
//                     'rgba(0, 255, 0, 0.6)',
//                     'rgba(255, 0, 255, 0.6)'
//                 ]
//               }
//             ]
//           }
//         }
//         }
//         static defaultProps = {
//           displayTitle:true,
//           displayLegend: true,
//           legendPosition:'right',
//           location:'City'
//         }
//
//       render(){
//         return (
//           <div className="chart">
//             <Bar
//               data={this.state.chartData}
//               options={{
//                 title:{
//                   display:this.props.displayTitle,
//                   text:'Largest Cities In '+this.props.location,
//                   fontSize:25
//                 },
//                 legend:{
//                   display:this.props.displayLegend,
//                   position:this.props.legendPosition
//                 }
//               }}
//             />
//             <br/><br/>
//
//           </div>
//         )
//       }
//     }
    const Chart = (props) => {
      const [dat,setDat] = useState({})
      const [chartData,setchartData] = useState({});
      useEffect(() => {
        setchartData({
          labels: Object.keys(props.data),
          datasets:[
            {
               label:'Rentabilité de Vente / mois',
              data:Object.values(props.data),
              backgroundColor:[
                                'rgba(54, 162, 235, 0.6)',
                                  'rgba(255, 0, 0, 0.6)',
                                  'rgba(0, 255, 0, 0.6)',
                                  'rgba(255, 0, 255, 0.6)'
                              ]
            }
          ]
        })
      },[])

      return(
        <div className="chart">
          <Bar
            data=chartData}
            options={{
              title:{
                display:true,
                text:'Largest Cities In '+'city',
                fontSize:25
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
          <br/><br/>

        </div>
      )
    }

    export default Chart;
