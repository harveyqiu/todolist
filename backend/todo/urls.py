from django.conf.urls import url, include
from . import views
from rest_framework.routers import DefaultRouter

#

# The API URLs are now determined automatically by the router.
# Additionally, we include the login URLs for the browsable API.
urlpatterns = [
    url(r'todo/list', views.todo_list),
    url(r'todo', views.todo),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
