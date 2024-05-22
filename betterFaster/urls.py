from django.contrib import admin
from django.urls import path, include

#/admin ingresa al panel de administrador proporcionado por django
#/api es la conexion entre la app slack y el proyecto para determinar la url correcta

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('slack.urls')),
]