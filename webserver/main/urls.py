from django.urls import path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from . import views

urlpatterns = [
    path('screensaver', views.screensaver),
    path('home', views.home),
    path('weather_widget', views.weather_widget),
]
