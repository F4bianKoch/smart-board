import json
from datetime import datetime
import pytz
import threading

from channels.generic.websocket import WebsocketConsumer

from .widgets.wetter_widget import WeatherWidget


class TimeConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.stop = False

        self.thread = threading.Thread(target=self.get_time)
        self.thread.start()

    def get_time(self):
        old_time = 0
        while True:
            time_query = datetime.now(pytz.timezone('Europe/Berlin'))
            current_time = time_query.strftime('%H:%M')
            day = time_query.strftime('%a')
            current_date = time_query.strftime(f'{day[0:2]} %d.%m.%Y')
            if current_time != old_time:
                self.send(json.dumps({
                    'time': str(current_time),
                    'date': str(current_date),
                }))
            old_time = current_time
            if self.stop:
                break

    def disconnect(self, code):
        self.stop = True
        del self.thread
        print('websocket disconntected')


class WeatherConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.stop = False
        self.thread = threading.Thread(target=self.get_weather)
        self.thread.start()

    def get_weather(self):
        weather_widget = WeatherWidget(
            api_key='c8d18229a04d465c872161719221203')
        while True:
            weather_json = weather_widget.api_request()
            weather = weather_widget.format_request_small(weather_json)
            self.send(json.dumps(weather))
            if self.stop:
                break

    def disconnect(self, code):
        self.stop = True
        del self.thread
        print('websocket disconntected')
