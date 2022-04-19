from asyncio import tasks
from django.shortcuts import redirect, render
from django.http import HttpResponse
import random

from .variables.greeting_messages import greeting_messages
from .models import *


def screensaver(request):
    ''' view for screensaver '''
    return render(request, 'screensaver.html', context={'time': 'N/A', 'date': 'N/A'})


def home(request):
    ''' view for homepage '''
    msg = greeting_messages[random.randint(1, len(greeting_messages))]
    return render(request, 'home.html', context={'msg': msg})

