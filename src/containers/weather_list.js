import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map((weather) => weather.main.temp);
		const pressures = cityData.list.map((weather) => weather.main.pressure);
		const humidities = cityData.list.map((weather) => weather.main.humidity);
		return (
			<tr key={name}>
				<td>{name}</td>
				<td><Chart data={temps} color="orange" height={120} width={180} units="(k)" /></td>
				<td><Chart data={pressures} color="blue" height={120} width={170} units="(hPa)" /></td>
				<td><Chart data={humidities} color="red" height={120} width={152} units="(%)" /></td>
			</tr>
		);
	}
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature(k)</th>
						<th>Pressure(hPa)</th>
						<th>Humidity(%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToPorps({ weather }) {
	return { weather }; // { weather: weather }
}

export default connect(mapStateToPorps)(WeatherList);