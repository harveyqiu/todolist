from rest_framework import viewsets
# Create your views here.
from .models import Todo
from .serializer import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

