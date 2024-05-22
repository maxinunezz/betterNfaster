from rest_framework import serializers
from .models import Plan, FAQ

#se definen dos serializers para los modelos Plan y FAQ utilizando Django REST Framework. Los serializers se utilizan para convertir instancias de modelos Django a representaciones JSON (o viceversa) que se pueden enviar y recibir a través de la API REST.

#model = FAQ: Especifica que este serializer está asociado con el modelo FAQ.

#fields = '__all__': Indica que se deben incluir todos los campos del modelo FAQ en el serializer. Esto incluye todos los campos definidos en el modelo FAQ, como question, answer y order.

class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = '__all__'

class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'