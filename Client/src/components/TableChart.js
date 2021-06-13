const TableChart = (props) => {
  return(
    <table style={{marginRight :'auto', marginLeft :'auto' }}>
        <tr>
          <td style={{width : 300}}>
            <div style={{ background: '#5ac268', padding: 20, minHeight: 50 ,textAlign : 'center' , fontWeight :'bold'}}>
            {props.month}
            </div>

          </td>
        </tr>
        <tr style={{border : 'solid'}}>
          <td style={{width : 300}}>
          <Chart data= {props.data}/>
          </td>
        </tr>
        <tr style={{border : 'solid'}}>
          <td style={{width : 300}}>
          <Chart2 data = {props.data}/>
          </td>
        </tr>

    </table>
  )
}
