import React, {Component,useState,useEffect} from 'react';
import{Bar,Line,Pie} from 'react-chartjs-2';
import * as api from '../api/index.js';

// class Chart1 extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//           chartData:{
//             labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
//             datasets:[
//               {
//                 label:'Moyenne de points cumulés',
//                 data:[
//                   20,
//                   50,
//                   50,
//                   60,
//                   90,
//                   110,
//                   20,
//                   50,
//                   50,
//                   60,
//                   90,
//                   110
//                 ],
//                 backgroundColor:[
//                   'rgba(255, 99, 132, 0.6)',
//                   /*'rgba(54, 162, 235, 0.6)',
//                   'rgba(255, 206, 86, 0.6)',
//                   'rgba(75, 192, 192, 0.6)',
//                   'rgba(153, 102, 255, 0.6)',
//                   'rgba(255, 159, 64, 0.6)',
//                   'rgba(255, 99, 132, 0.6)'*/
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
//
//             <Line
//                 data={this.state.chartData}
//                 options={{
//                     title:{
//                       display:this.props.displayTitle,
//                       text:'Largest Cities In '+this.props.location,
//                       fontSize:25
//                     },
//                     legend:{
//                       display:this.props.displayLegend,
//                       position:this.props.legendPosition
//                     }
//                   }}
//             />
//           </div>
//         )
//       }
//     }
    const Chart1 = (props) => {
      const [dat,setDat] = useState({})
      const [chartData,setchartData] = useState({});
      useEffect(async () => {
        const token = localStorage.getItem("token");
        try {
          const {data} = await api.getdatac(token);
          console.log(data);
          setchartData({
            labels: Object.keys(data),
            datasets:[
              {
                label:'Moyenne de points cumulés',
                data:Object.values(data),
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  /*'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'*/
                ]
              }
            ]
          })

        } catch (e) {
          console.log(e.error);
        }

      },[])
      return (
        <div className="chart">

          <Line
              data={chartData}
              options={{
                  title:{
                    display:true,
                    text:'Largest Cities In '+"city",
                    fontSize:25
                  },
                  legend:{
                    display:true,
                    position:props.'right'
                  }
                }}
          />
        </div>
      )

    }

    export default Chart1;
