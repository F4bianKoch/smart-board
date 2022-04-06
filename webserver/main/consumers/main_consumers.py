import json
from datetime import datetime
from turtle import title
import pytz
import threading
import time

from channels.generic.websocket import WebsocketConsumer

from utils.config_utils import get_config_data

from ..widgets.weather_widget import WeatherWidget


class ScreensaverConsumer(WebsocketConsumer):
    '''
        Websocket for the screensaver 
        current time interface: get_time()
        uses 
    '''

    def connect(self):
        ''' on websocket connect '''
        self.accept()
        self.stop = False

        self.thread_time_display = threading.Thread(target=self.get_time)
        self.thread_time_display.start()

    def get_time(self):
        ''' get current time and send it to websocket '''
        old_time = 0

        while True:
            # querry time
            time_query = datetime.now(pytz.timezone('Europe/Berlin'))
            current_time = time_query.strftime('%H:%M')
            # format querry output
            day = time_query.strftime('%a')
            current_date = time_query.strftime(f'{day[0:2]} %d.%m.%Y')
            # send to websocket
            if current_time != old_time:
                self.send(json.dumps({
                    'time': str(current_time),
                    'date': str(current_date),
                }))
            old_time = current_time
            # break if websocket was disconnected
            if self.stop:
                break

    def disconnect(self, code):
        ''' on websocket disconnect '''
        self.stop = True
        del self.thread_time_display


class HomePageConsumer(WebsocketConsumer):
    ''' 
        Websocket for the homepage 
        current time interface: get_time()
        current weather interface: get_weather()
        from config.json:
            - location: for weather interface
            - weather_api_key: for weather interface
    '''

    def connect(self):
        ''' on websocket connect '''
        self.accept()
        self.stop = False
        content = {}

        # setup for weather widget
        config = get_config_data()
        api_key = config["weather_widget"]["api_key"]
        location = config["weather_widget"]["location"]
        weather_widget = WeatherWidget(api_key, location)

        # start all threads for the widgets
        self.thread_time = threading.Thread(
            target=self.get_time, args=[content])
        self.thread_weather_widget = threading.Thread(
            target=self.get_weather, args=[weather_widget, content])
        self.thread_weather_widget.start()
        self.thread_time.start()

    def get_weather(self, weather_widget, content):
        ''' get current weather every 20min '''
        while True:
            weather_json = weather_widget.api_request()
            weather = weather_widget.format_request_small(weather_json)
            content.update(weather)
            self.send(json.dumps(content))
            if self.stop:
                break
            time.sleep(1200)

    def get_time(self, content):
        ''' get current time and send it to websocket '''
        old_time = 0

        while True:
            # querry time
            time_query = datetime.now(pytz.timezone('Europe/Berlin'))
            current_time = time_query.strftime('%H:%M')
            # format querry output
            day = time_query.strftime('%a')
            current_date = time_query.strftime(f'{day[0:2]} %d.%m.%Y')
            # send to websocket
            if current_time != old_time:
                time = {
                    'time': str(current_time),
                    'date': str(current_date),
                }
                content.update(time)
                self.send(json.dumps(content))

            old_time = current_time
            # break if websocket was disconnected
            if self.stop:
                break
    
    def toDo_list(self, content):
        
        while True:
            # querry time
            time_query = datetime.now(pytz.timezone('Europe/Berlin'))
            current_time = time_query.strftime('%H:%M')
            # format querry output
            day = time_query.strftime('%a')
            current_date = time_query.strftime(f'{day[0:2]} %d.%m.%Y')
            # send to websocket
            if current_time != old_time:
                time = {
                    'time': str(current_time),
                    'date': str(current_date),
                }
                content.update(time)
                self.send(json.dumps(content))

            old_time = current_time
            # break if websocket was disconnected
            if self.stop:
                break

    def disconnect(self, code):
        ''' on websocket disconnect '''
        self.stop = True
        del self.thread_time
        del self.thread_weather_widget


#print(ToDoList)