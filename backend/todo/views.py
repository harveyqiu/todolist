from rest_framework import viewsets
# Create your views here.
from .models import Todo
from .serializer import TodoSerializer
from rest_framework.decorators import list_route
from rest_framework.response import Response
from django.http import JsonResponse
from django.core.paginator import Paginator


class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.filter(checked=False)

    @list_route(methods=['get'])
    def order_by_expire_date(self, request):
        todo_set = Todo.objects.filter(checked=False).order_by('expire_date')

        page = self.paginate_queryset(todo_set)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(todo_set, many=True)
        return Response(serializer.data)

    @list_route(methods=['get'])
    def order_by_priority(self, request):
        todo_set = Todo.objects.filter(checked=False).order_by('-priority')
        page = self.paginate_queryset(todo_set)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(todo_set, many=True)
        return Response(serializer.data)


def page_count(request):
    todo_set = Todo.objects.all()
    p = Paginator(todo_set, 10)
    return JsonResponse({'num_pages': p.num_pages})
