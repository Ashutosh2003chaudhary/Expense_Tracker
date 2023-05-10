import './chart.css'
import Chartbar from "./chartbar";
function Chart(props) {
    const datapointvalues=props.datapoints.map(datapoint=>datapoint.value)
    const totalmaximum=Math.max(...datapointvalues)
    return (
        <div className='chart'>
            {props.datapoints.map((datapoints)=>(
        <Chartbar
        key={datapoints.label}
        value={datapoints.value}
        maxvalue={totalmaximum}
        label={datapoints.label}
        />))}</div>


    );

}

export default Chart;