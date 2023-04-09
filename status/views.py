from .models import Status
from .serializers import StatusSerializer

from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework import generics,mixins

# Create your views here.
class StatusListCreateAPIView(generics.ListCreateAPIView):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer

class StatusDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer
    lookup_field = 'id'
