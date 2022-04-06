from requests import get


class WeatherWidget:
    ''' Class for weather widget:
        querys weather api for current weather
        api request: api_request()
        small weather request for the widget: format_request_small()
    '''

    def __init__(self, api_key, location):
        self.__api_key = api_key
        self.location = location

    def api_request(self):
        ''' querys weather api for current weather '''
        weather_json = get(
            f'''https://api.weatherapi.com/v1/forecast.json?key={self.__api_key}&lang=de&q={self.location}&days=2''')
        weather_json = weather_json.json()
        return weather_json

    def format_request_small(self, weather_json):
        ''' formates api request '''
        current_temperature = weather_json['current']['temp_c']
        weather_icon_link = weather_json['current']['condition']['icon']
        text = weather_json['current']['condition']['text']
        humidity = weather_json['forecast']['forecastday'][0]['day']['daily_chance_of_rain']
        location = weather_json['location']['name'] + \
            ', ' + weather_json['location']['region']
        tomorrow_max_temperature = weather_json['forecast']['forecastday'][1]['day']['maxtemp_c']
        tomorrow_min_temperature = weather_json['forecast']['forecastday'][1]['day']['mintemp_c']
        tomorrow_text = weather_json['forecast']['forecastday'][1]['day']['condition']['text']
        tomorrow_icon = weather_json['forecast']['forecastday'][1]['day']['condition']['icon']

        weather = {
            'weatherData': {
                'temperature': current_temperature,
                'icon': weather_icon_link,
                'text': text,
                'humidity': humidity,
                'location': location,
                'tomorrow_max_temperature': tomorrow_max_temperature,
                'tomorrow_min_temperature': tomorrow_min_temperature,
                'tomorrow_icon': tomorrow_icon,
                'tomorrow_text': tomorrow_text
            }
        }
        return weather
