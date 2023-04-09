from django.urls import path
from .views import StatusListCreateAPIView,StatusDetailAPIView

urlpatterns = [
    path('status/',StatusListCreateAPIView.as_view()),
    path('status/<id>/',StatusDetailAPIView.as_view()),
]
