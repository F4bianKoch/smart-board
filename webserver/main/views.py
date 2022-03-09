from django.shortcuts import redirect, render
from django.http import HttpResponse


# Create your views here


def screensaver(request):
    return render(request, 'screensaver.html', context={'time': '16:30'})


def home(request):
    return render(request, 'home.html')
