from django.shortcuts import render
from django.http import HttpResponse
# Create your views here

def index(response):
    return HttpResponse("<h1>Hello your computer has virus, please send 100 bitcoins to Adrian immidiately</h1>")