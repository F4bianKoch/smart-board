from django.shortcuts import redirect, render
from django.http import HttpResponse
import random

from .variables.greeting_messages import greeting_messages

# Create your views here


def screensaver(request):
    return render(request, 'screensaver.html', context={'time': '16:30'})


def home(request):
    msg = greeting_messages[random.randint(1, len(greeting_messages))]
    return render(request, 'home.html', context={'msg': msg})
