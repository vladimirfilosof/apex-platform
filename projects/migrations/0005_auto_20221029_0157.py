# Generated by Django 3.2.16 on 2022-10-28 22:57

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0004_auto_20221029_0156'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='finish_vote_date',
            field=models.DateTimeField(default=datetime.datetime(2022, 10, 29, 1, 57, 27, 835992)),
        ),
        migrations.AlterField(
            model_name='project',
            name='start_vote_date',
            field=models.DateTimeField(default=datetime.datetime(2022, 10, 29, 1, 57, 27, 835992)),
        ),
    ]
