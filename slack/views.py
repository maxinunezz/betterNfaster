from rest_framework import viewsets
from .models import Plan, FAQ
from .serializers import PlanSerializer, FAQSerializer


# PlanViewSet: Gestiona los endpoints relacionados con el modelo Plan utilizando el serializer PlanSerializer.
# FAQViewSet: Gestiona los endpoints relacionados con el modelo FAQ utilizando el serializer FAQSerializer y ordenando los FAQs por el campo order.
# viewsets.ModelViewSet: Proporciona una implementación completa para las operaciones CRUD, simplificando la creación de APIs RESTful en Django.

class PlanViewSet(viewsets.ModelViewSet):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer

class FAQViewSet(viewsets.ModelViewSet):
    queryset = FAQ.objects.all().order_by('order')
    serializer_class = FAQSerializer



