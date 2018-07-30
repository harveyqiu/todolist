from django.db import models


# Create your models here.

class Todo(models.Model):
    content = models.CharField(max_length=255)
    expire_date = models.DateField()
    priority_choices = (
        (0, 'Normal'),
        (1, 'Urgent'),
        (2, 'Very Urgent')
    )
    priority = models.IntegerField(choices=priority_choices)
    checked = models.BooleanField()
