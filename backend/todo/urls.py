from django.conf.urls import url, include
from . import views
from rest_framework import routers

#

# The API URLs are now determined automatically by the router.
# Additionally, we include the login URLs for the browsable API.

router = routers.DefaultRouter()
router.register(r'todos', views.TodoViewSet, base_name='todo')
urlpatterns = [
    url(r'^page', views.page_count),
    url(r'^', include(router.urls))
]
