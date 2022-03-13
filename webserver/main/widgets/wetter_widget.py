from requests import get


class WeatherWidget:
    def __init__(self, api_key, location):
        self.__api_key = api_key
        self.location = location

    def api_request(self):
        weather_json = get(
            f'''https://api.weatherapi.com/v1/current.json?key={self.__api_key}&q={self.location}''')
        weather_json = weather_json.json()
        return weather_json

    def format_request_small(self, weather_json):
        current_temperature = weather_json['current']['temp_c']
        weather_icon_link = weather_json['current']['condition']['icon']
        humidity = weather_json['current']['humidity']
        location = weather_json['location']['name'] + \
            ', ' + weather_json['location']['region']

        current_weather = {
            'temperature': current_temperature,
            'icon': weather_icon_link,
            'humidity': humidity,
            'location': location
        }
        return current_weather
