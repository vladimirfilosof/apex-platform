# Generated by Django 3.2.16 on 2022-10-28 22:56

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_auto_20221029_0152'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='finish_vote_date',
            field=models.DateTimeField(default=datetime.datetime(2022, 10, 29, 1, 56, 59, 479246)),
        ),
        migrations.AlterField(
            model_name='project',
            name='start_vote_date',
            field=models.DateTimeField(default=datetime.datetime(2022, 10, 29, 1, 56, 59, 479246)),
        ),
    ]
