from django.shortcuts import redirect, render
from django.http import HttpResponse


# Create your views here


def screensaver(response):
    return render(response, 'main/screensaver.html', {})


def home(response):
    return render(response, 'main/home.html')
