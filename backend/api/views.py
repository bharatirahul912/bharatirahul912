from django.shortcuts import render
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView
from . models import Task
from .serializers import TaskSerializer

class TaskList(ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskCreate(CreateAPIView):
    queryset = Task.objects.all()
    serializer_class =TaskSerializer

class TaskDelete(DestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    
