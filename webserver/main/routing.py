import imp
from django.urls import path

from .consumers import TimeConsumer, WeatherConsumer


ws_urlpatterns = [
    path('ws/time/', TimeConsumer.as_asgi()),
    path('ws/weather/', WeatherConsumer.as_asgi()),
]
