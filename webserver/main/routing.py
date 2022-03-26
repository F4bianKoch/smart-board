import imp
from django.urls import path

from .consumers import HomePageConsumer, ScreensaverConsumer


ws_urlpatterns = [
    path('ws/screensaver/', ScreensaverConsumer.as_asgi()),
    path('ws/home/', HomePageConsumer.as_asgi()),
]
