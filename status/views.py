from .models import Status
from .serializers import StatusSerializer

from rest_framework import viewsets,parsers

# Create your views here.
class StatusViewset(viewsets.ModelViewSet):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer
    parser_classes = [parsers.FormParser,parsers.MultiPartParser]
