# from django.urls import path, include: Importa las funciones path e include del módulo django.urls. Estas funciones se utilizan para definir las rutas de la aplicación.

# from rest_framework.routers import DefaultRouter: Importa DefaultRouter de Django REST Framework. DefaultRouter es una clase que genera automáticamente las rutas necesarias para los viewsets.

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PlanViewSet, FAQViewSet

# Se crea una instancia de DefaultRouter, que se utilizará para registrar los viewsets y generar automáticamente las rutas necesarias para ellos.

# router.register(r'plans', PlanViewSet): Registra el viewset PlanViewSet con el prefijo de URL plans. Esto significa que las operaciones CRUD para el modelo Plan estarán disponibles en rutas que comiencen con /plans/.

# router.register(r'faqs', FAQViewSet): Registra el viewset FAQViewSet con el prefijo de URL faqs. Esto significa que las operaciones CRUD para el modelo FAQ estarán disponibles en rutas que comiencen con /faqs/.

# path('', include(router.urls)): Incluye todas las rutas generadas por el router en las rutas principales de la aplicación. Al usar include(router.urls), todas las rutas registradas en el router se añaden a las rutas del proyecto.

router = DefaultRouter()
router.register(r'plans', PlanViewSet)
router.register(r'faqs', FAQViewSet)

urlpatterns = [
    path('', include(router.urls)),
]