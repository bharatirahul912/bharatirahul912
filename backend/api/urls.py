from django.urls import path
from . import views
urlpatterns = [
   path('list/',views.TaskList.as_view()),
   path('create/',views.TaskCreate.as_view()),
   path('delete/<int:pk>/',views.TaskDelete.as_view()), 
]
