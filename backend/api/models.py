from django.db import models

class Task(models.Model):
    items=models.CharField(max_length=100)
    
