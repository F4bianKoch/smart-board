from django.urls import path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from . import views

urlpatterns = [
    path('screensaver.html', views.screensaver),
    path('home.html', views.home),
]
