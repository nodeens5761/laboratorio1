CAMPUS TECH - LABORATORIO SEMANA 2
MARCOS DE DESARROLLO WEB
BOOTSTRAP 5

==================================================
1. DECISIONES DE BREAKPOINTS
==================================================

Se utilizó un enfoque mobile-first.

Los servicios utilizan:

col-12
col-md-6
col-xl-3

Esto permite que:

- En teléfonos se muestre 1 servicio por fila.
- Desde md se muestren 2 servicios por fila.
- Desde xl se muestren 4 servicios por fila.

El hero utiliza:

col-12
col-lg-6

Esto permite que en móviles el texto y la imagen
se apilen y que desde lg ocupen aproximadamente
la mitad del ancho cada uno.

==================================================
2. MEJORA DE ACCESIBILIDAD
==================================================

Se implementó un enlace para saltar directamente
al contenido principal.

También se utilizó:

- aria-label en la navegación.
- aria-current en el enlace activo.
- aria-hidden="true" en iconos decorativos.
- role="status" y aria-live="polite" en el mensaje
  de selección del taller.
- alt descriptivo en la imagen.
- scope en los encabezados de la tabla.

Además, los botones y enlaces mantienen un estado
de foco visible mediante CSS.

==================================================
3. PROBLEMA RESUELTO
==================================================

El principal problema resuelto fue la adaptación
del contenido a diferentes tamaños de pantalla.

Bootstrap Grid permite cambiar la distribución
automáticamente según el breakpoint.

También se implementó table-responsive para evitar
que una tabla amplia provoque desplazamiento
horizontal en toda la página.

El navbar se convierte en un menú colapsable
en pantallas pequeñas.

==================================================
4. ESTRUCTURA DEL PROYECTO
==================================================

index.html
css/styles.css
js/app.js
assets/img/campus-tech.jpg

==================================================
5. TECNOLOGÍAS UTILIZADAS
==================================================

HTML5
CSS3
JavaScript
Bootstrap 5.3.8
Bootstrap Icons