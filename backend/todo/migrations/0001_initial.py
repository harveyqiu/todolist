# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('content', models.CharField(max_length=255)),
                ('expire_date', models.DateField()),
                ('priority', models.IntegerField(choices=[(0, 'Normal'), (1, 'Urgent'), (2, 'Very Urgent')])),
                ('checked', models.BooleanField()),
            ],
        ),
    ]
