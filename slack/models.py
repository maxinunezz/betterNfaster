from django.db import models

#Modelos de planes para la base de datos con sus diferentes campos
#def __str__ se utiliza para definir la representación en forma de cadena de una instancia del modelo
#FAQ es el modelo para la seccion de preguntas frecuentes

class Plan(models.Model):
    name = models.CharField(max_length=100)
    description= models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    isBest= models.BooleanField(default=False)
    features= models.JSONField()
    
    def __str__(self):
        return self.name
    
class FAQ(models.Model):
    question = models.CharField(max_length=200)
    answer = models.TextField()
    order = models.IntegerField()

    def __str__(self):
        return self.question

