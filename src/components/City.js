import React from 'react'
import Nav from "./Nav";


class City extends React.Component {

  constructor(props) {
    super(props);
    this.state = { weatherData: [] };
    fetch(`/api/location/${this.props.match.params.number}/`)
            .then( (response) => {
                return response.json() })   
                    .then( (json) => {
                        this.setState({
                          weatherData: json.consolidated_weather,
                          data: json.title,
                        });
                      });

  }

    state = { 
            id: this.props.match.params.number,
            data: [],
            weatherData: []
        }

    handleChange = async (e) => {
        const response = await fetch(`/api/location/${this.state.id}/`);
        const json = await response.json();
        const weather = json.consolidated_weather;
        this.setState({ 
            data: json.title,
            weatherData: weather
        });
      }


      Round(x){
          let result = Math.round(x);
          if(!isNaN(result))
            return result;
          else
            return '';
      }

      showWeather = (e) => {

        let weatherList = this.state.weatherData;
        let listItems = weatherList.map((item, index) =>
            <div key={index} className="part">
                <div>{item.applicable_date}</div>
                <img src={`https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`} /><span>{item.weather_state_name}</span>
                <div><span>Max: </span>{this.Round(item.max_temp)}</div>
                <div><span>Min: </span>{this.Round(item.min_temp)}</div>
                <div><span>Humidity: </span>{this.Round(item.max_temp)}</div>
                <div><span>Wind speed: </span>{this.Round(item.wind_speed)} mph</div>
            </div>
          );
          return (
            <div className="days">{listItems}</div>
        );
      }

    render() {
        return (
            <div>
                <Nav /> 
              <h1>City: {this.state.data}</h1>
              {this.showWeather()}
            </div>
        )
    }

}

export default City