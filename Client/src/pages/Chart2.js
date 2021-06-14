import React, {Component,useState,useEffect} from 'react';
import{Bar,Doughnut,Line,Pie} from 'react-chartjs-2';


    const Chart2 = (props) => {
      const [dat,setDat] = useState({})
      const [chartData,setchartData] = useState({});
      useEffect(() => {
        setchartData({
          labels: Object.keys(props.data),
          //labels: ['Zen Marsa', 'Zen Bizerte', 'Zen sokra', 'Zen Sousse'],
          datasets:[
            {
               label:'Rentabilité de Vente / mois',
              data:Object.values(props.data),
              /*data:[
                                   617594,
                                   181045,
                                   153060,
                                   158214,
                
                                ],
  */            backgroundColor:[
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
          <Doughnut
            data={chartData}
            options={{
              title:{
                display:true,
                text:'Largest Cities In ',
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

    export default Chart2;