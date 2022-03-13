import imp
from django.urls import path

from .consumers import TimeConsumer, WeatherWidgetConsumer, TimeWidgetConsumer


ws_urlpatterns = [
    path('ws/time/', TimeConsumer.as_asgi()),
    path('ws/timeWidget/', TimeWidgetConsumer.as_asgi()),
    path('ws/weather/', WeatherWidgetConsumer.as_asgi()),
]
