from django.urls import path

from . import views

urlpatterns = [
    path('timer_app', views.timer_app),
]
