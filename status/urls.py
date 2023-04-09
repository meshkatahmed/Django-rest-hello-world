from django.urls import path
from .views import StatusViewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'status',StatusViewset,basename='status')

urlpatterns = [] + router.urls
