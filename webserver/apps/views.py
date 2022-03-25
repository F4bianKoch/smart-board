from django.shortcuts import render


def timer_app(request):
    return render(request, 'apps/timer_app.html', {})
