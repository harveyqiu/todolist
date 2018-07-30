from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# Create your views here.
from .models import Todo
from .serializer import TodoSerializer


@api_view(['GET'])
def todo_list(request):
    todo_set = Todo.objects.filter(checked=False)
    serializer = TodoSerializer(todo_set, many=True)

    return Response(serializer.data)


@api_view(['POST'])
def todo(request):
    serializer = TodoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)