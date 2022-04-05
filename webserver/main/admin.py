from django.contrib import admin
from .models import Members, ToDoList

admin.site.register(Members)
# Register your models here.

admin.site.register(ToDoList)
#ToDoList model is registered on admin