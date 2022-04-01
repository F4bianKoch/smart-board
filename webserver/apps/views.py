from django.shortcuts import render


def timer_app(request):
    return render(request, 'apps/timer_app.html', {})

def todolist_app(request):
    return render(request, 'apps/todolist_app.html', {}) 
