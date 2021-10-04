

# Individual Project -  Dogs

<p align="left">
  <img height="200" src="./dog.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize- Postgres.

 para ver una demo del proyecto click <a href="https://www.linkedin.com/feed/update/urn:li:activity:6850597010282725376/"> AQUI</a> (proximamente deploy)

## Descripcion del proyecto :
Es una SPA (single page application) creada como proyecto individual para el bootcamp <a href="https://www.soyhenry.com/"> Soy Henry</a> ,que permite ver entre la razas existentes de perros y te permite crear razas nuevas. 
#### Contiene una landing page
#### Una pagina "Home" que contiene:
- un paginado para poder ver de a 8 perros
- una barra de busqueda 
- opciones de ordenamiento de forma alfabetica de forma ascendete y descendente
- opciones de ordenamiento por peso de forma ascendente y descendente
- opcion de filtrado por raza, opcion de filtrado por perro creado o raza de perro existente
        
#### Una pagina pagina "Breed Detail":
- permite ver los detalles de la raza seleccionada 

### Base de datos

El modelo de la base de datos tiene las siguientes entidades:

- [ ] Raza con las siguientes propiedades:
  - ID *
  - Nombre *
  - Altura *
  - Peso *
  - Años de vida
- [ ] Temperamento con las siguientes propiedades:
  - ID
  - Nombre


### Backend

Se desarrollo un servidor en Node/Express con las siguientes rutas:

__IMPORTANTE__: No se utilizo los filtrados, ordenamientos y paginados brindados por la API externa, todas estas funcionalidades las realice yo mismo.

- [ ] __GET /dogs__:
  - Obtener un listado de las razas de perro
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] __GET /dogs?name="..."__:
  - Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
  - Si no existe ninguna raza de perro mostrar un mensaje adecuado
- [ ] __GET /dogs/{idRaza}__:
  - Obtener el detalle de una raza de perro en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
  - Incluir los temperamentos asociados
- [ ] __GET /temperament__:
  - Obtener todos los temperamentos posibles
  - En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
- [ ] __POST /dog__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
  - Crea una raza de perro en la base de datos

