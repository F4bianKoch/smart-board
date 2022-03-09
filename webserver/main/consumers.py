import json
from datetime import datetime
import pytz

from channels.generic.websocket import WebsocketConsumer


class TimeConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        old_time = 0

        while True:
            time_query = datetime.now(pytz.timezone('Europe/Berlin'))
            current_time = time_query.strftime('%H:%M')
            if current_time != old_time:
                self.send(json.dumps({'time': str(current_time)}))
            old_time = current_time
