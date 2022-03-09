import imp
from django.urls import path

from .consumers import TimeConsumer


ws_urlpatterns = [
    path('ws/time/', TimeConsumer.as_asgi()),
]
