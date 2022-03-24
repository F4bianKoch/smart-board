from django.shortcuts import redirect, render
from django.http import HttpResponse
import random

from .variables.greeting_messages import greeting_messages
from .forms import *

# Create your views here


def screensaver(request):
    return render(request, 'screensaver.html', context={'time': 'N/A', 'date': 'N/A'})


def home(request):
    msg = greeting_messages[random.randint(1, len(greeting_messages))]
    return render(request, 'home.html', context={'msg': msg})


def weather_widget(request):
    return render(request, 'weather_widget.html', context={})

def todolist(request):
    ToDoList = ToDoList.objects.all()
    form = ToDoListForm()
    context = {'ToDoList':ToDoList, 'form':form}
    return render(request, 'home.html', context)

