# Generated by Django 4.0.3 on 2022-03-24 11:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_todoliste'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ToDoListe',
            new_name='ToDoList',
        ),
    ]
