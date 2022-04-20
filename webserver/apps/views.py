from asyncio import tasks
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import *
from .forms import *


def timer_app(request):
    return render(request, 'apps/timer_app.html', {})

def todolist_app(request):
    tasks = ToDoList.objects.values('title').all()

    form = ToDoListForm()

    if request.method =='POST':
        form = ToDoListForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('/todolist_app')

    context = {'tasks': tasks, 'form':form}
    return render(request, 'apps/todolist_app.html', context) 
