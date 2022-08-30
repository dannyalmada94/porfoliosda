# porfoliosda
Este es el código de mi frontend. Si se ingresa al componente experiencia.ts se puede ver cómo funciona la lógica de la aplicación en general, puesto que el resto de los componentes como "habilidad", "tecnologías", "proyectos" y "estudios" funcionan de manera similar a este componente y subcomponentes. El componente "experiencia" es el componente padre del componente "experiencia-items", que recibe la información mediante una directiva de Angular. El componente "experiencia-items" contiene el listado de experiencias que se traen desde la base de datos. La primera opción es la de "borrar" alguno de los items al hacer click en el boton o icono correspondiente. Esta acción emite un evento hacia el componente padre, y el componente padre es el que tiene el método para conectarse con el servicio y este con la base de datos y de ese modo borrar la experiencia y a la vez mostrar el listado de experiencias que aun quedan. Luego para "agregar" una nueva experiencia, al hacer click en el boton correspondiente se accede mediante routing al componente "experiencia-save" que contiene la vista similar a la anterior, solamente que en vez de estar el componente "experiencia" está el componente padre "experiencia-save", que a su vez contiene al componente "experiencia-new" que es el que contiene el formulario para poder agregar una nueva experiencia. Luego de rellenar el formulario, y hacer click en el método correspondiente, se envía un evento al componente padre y este lo envía al método del servicio "databaseservice" para que se agregue en la base de datos y se muestre en la pantalla principal, también mediante routing. Luego el método editar, al intentar editar un item haciendo click en el boton correspondiente, se accede al componente "experiecnia-edit", que es una vista similar a la pantalla principal, pero está presente el componente "experiencia-edit" y este a su vez contiene el componente "experiencia-forms", que contiene el formulario para poder editar la experiencia seleccionada. ediante routing traigo el id de la experiencia e ditar y la muestro en los  campos del formulario. Luego de terminar los  campos que quiero editar, se envia la información al componente padre y luego este al servicio "databaseservice"
