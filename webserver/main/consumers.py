import imp
import json
from datetime import datetime
import pytz
import threading

from channels.generic.websocket import WebsocketConsumer
from widgets.time_feature import current_time

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

    def disconnect(self, close_code):
        self.stop = True
        del self.thread
        print('websocket disconntected')

class TimeWidgetConsumer(WebsocketConsumer):

    def connect(self):
        self.accept()
        self.stop = False

        self.thread = threading.Thread(target=self.get_time)
        self.thread.start()

    def get_time(self):
        old_time = 0
        while True:
            current_time = current_time()
            if current_time != old_time:
                self.send(json.dumps({
                    'time': str(current_time),
                    }))
            old_time = current_time
            if self.stop:
                break
    
    def start_timer(self, m, s):
        pass

    def start_stop_watch(self):
        pass

    def disconnect(self, close_code):
        self.stop = True
        del self.thread
        print('websocket disconntected')

