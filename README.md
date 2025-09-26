# 00042223_practica4_seccion2

Analicemos: ¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto?

En JavaScript los operadores pueden tener comportamientos que a veces parecen raros porque el lenguaje hace conversión de tipos automáticamente. Por ejemplo, si sumo un número con una cadena, en lugar de dar error, lo convierte todo a texto y me devuelve una concatenación. Lo mismo pasa cuando comparo cosas distintas con ==, ya que internamente JS trata de “acomodar” los valores para poder compararlos.

También influye la precedencia de operadores, o sea, el orden en que se ejecutan. Por eso no es lo mismo escribir 3 + 7 * 10 que (3 + 7) * 10. En resumen, JS me lo permite porque es un lenguaje flexible y dinámico que intenta no romperse, pero eso también obliga a tener cuidado para no cometer errores lógicos.

Analicemos: ¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo?

Sí, el comportamiento de los flujos de control en JavaScript es bastante parecido al de otros lenguajes como Java, C o Python. Las estructuras if, else if, else, switch, while y for funcionan de forma muy similar: evalúan condiciones y repiten bloques de código.
