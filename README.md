


# Better and Faster TEST

SPA (Simple Page Aplication) simulando la app de slack 

## Backend

El proyecto betterfaster comienza en dicha carpeta configurando python para trabajar con virtualev, a su vez en setting.py se vincula con la base de datos de postgreSQL. 

Luego configuro la conexion con la app llamada slack que es especificamente en la parte del proyecto en el que trabajé. 
Alli lo primero que hice fue definir mis modelos con sus caracteristicas.

Luego Django REST Framework me perimte utilizar serializers para convertir facilmente la data en JSON.

Paso a las vistas que es donde gestiono la relacion de la vista con su modelo correspondiente y, con la implementacion de los ModelViewSet que me proporciona REST, puedo trabajar el CRUD completo.

## Frontend

Para el front decidi utilizar CSS nativo de react. 

La pagina es una SPA que utiliza los endpoints creados para renderizar informacion de distintos planes pagos de la aplicacion de Slack.

Mas abajo se renderiza una seccion de FAQs, que utilizando postman con el metodo POST puedo crear preguntas y que el componente, utilizando axios, buscara la data de la respuesta en el endopoint con el metodo GET.

## Gracias!!

Queria agradecerle a Ramon Marques especialmente por el acompañamiento durante la prueba tecnica y al equipo detras de Better&Faster por la oportunidad brindada. Luego de 6 meses buscando trabajo pude lograr tener mi primera prueba tecnica. Sea cual sea el resultado voy a seguir con mas fuerzas porque esto es lo que me gusta!
