-Componente: Crearé componentes como MovieCard, MovieList, MovieForm y Header para separar las distintas partes de la aplicación.
Porque permite organizar el código, reutilizar elementos y facilitar el mantenimiento del proyecto.


-JSX: Lo utilizaré para construir la interfaz donde se mostrarán las películas, formularios y botones.
Porque JSX permite escribir HTML dentro de JavaScript de forma clara y sencilla.


-Props: Las usaré para enviar información desde el componente principal a otros componentes, por ejemplo el título, género o año de una película.
Porque permiten compartir datos entre componentes sin duplicar información.


-Estado (useState): Lo usaré para guardar la lista de películas y los datos ingresados por el usuario en el formulario.
Porque el estado permite actualizar automáticamente la interfaz cuando cambian los datos.


-Renderizado de listas (.map + key): Lo utilizaré para recorrer el arreglo de películas y mostrar una tarjeta por cada una.
Porque `.map()` permite generar componentes dinámicamente y `key` ayuda a React a identificar cada elemento.


-Renderizado condicional: Lo usaré para mostrar mensajes como "No hay películas registradas" o para mostrar u ocultar formularios y botones.
Porque permite mostrar diferentes elementos según el estado de la aplicación.


Preguntas

1. ¿Qué ventaja tiene dividir el directorio en componentes en lugar de escribir todo en un solo archivo?

Separar la aplicación en componentes añade organización al código y lo hace más sencillo de mantener. Cada componente posee una función particular y puede ser utilizado en diferentes secciones del proyecto. También permite identificar errores y colaborar en equipo.

2. ¿Qué diferencia hay entre props y estado en tu solución? Da un ejemplo concreto de cada uno.

Las props se utilizan para transmitir información de un componente padre a un componente hijo y generalmente no se alteran en el componente receptor. Por ejemplo, el componente `MovieCard` recibe como props el título, género y año de una película.

El estado (`useState`) guarda información que puede variar a lo largo del uso de la aplicación. Por ejemplo, la lista de films o la información que el usuario ingresa en el formulario se almacena en el estado para actualizar la interfaz de forma automática.