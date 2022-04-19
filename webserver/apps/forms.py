from django import forms
from django.forms import ModelForm

from main.models import *


class ToDoListForm(forms.ModelForm):

    class Meta:
        model = ToDoList
        fields = '__all__'