# 🖼️ Badges

Badges dinámicos y personalizables que se generan de manera automática y que se pueden incluir fácilmente en archivos markdown o en cualquier página web.

> [!IMPORTANT]
> **Este proyecto está en progreso (WIP - Work In Progress)**. Algunas funcionalidades pueden no estar completas o estar en desarrollo activo.

## ✨ Características

- ✅ Generación dinámica de badges.
- ✅ Personalización con diferentes estilos.
- ✅ Soporte para formato SVG.
- ✅ Fácil integración en sitios web.
- ✅ Ideal para mostrar creadores, colaboradores, etc.

## 🛠️ Estructura del proyecto

- [functions/](./functions/): Ruta principal de la función de Firebase.

- [public/favicons/](./public/favicons/): Contiene los archivos de favicon utilizados en el proyecto.

- [public/media/](./public/media/): Almacena archivos multimedia como videos o audios que son utilizados en el proyecto.

- [public/og/](./public/og/): Esta carpeta almacena las imágenes Open Graph que son utilizadas para previsualizaciones cuando la página es compartida en redes sociales.

- [src/components/](./src/components/): Contiene los componentes reutilizables que no tienen que ver con la UI que pueden ser usados en diferentes partes del sitio web.

- [src/components/ui](./src/components/): Contiene los componentes de UI reutilizables.

- [src/contracts/](./src/contracts/): Contiene los contratos de tipos de datos (type definitions) que se utilizan a lo largo del código del proyecto.

- [src/data/](./src/data/): Esta carpeta almacena los datos estáticos o archivos que contienen la información que el sitio web necesita para mostrar en la interfaz.

- [src/icons/](./src/icons/): Incluye los íconos utilizados en el sitio web.

- [src/images/](./src/images/): Contiene todas las imágenes que son utilizadas en el sitio web, ya sean para fondos, gráficos u otros elementos visuales. _IMPORTANTE: Debes añadir acá las imágenes que quieres que sean procesadas por Astro utilizando el componente `<Image>` o `<Picture>`, de lo contrario guardalas en la carpeta `public`_.

- [src/layouts/](./src/layouts/): Almacena los componentes de disposición general de la aplicación, como estructuras de páginas completas, para mantener una consistencia visual en diferentes páginas.

- [src/pages/](./src/pages/): Contiene las páginas del sitio web.

- [src/pages/\_index](./src/pages/_index/): Las carpetas que inician con guión bajo dentro de `src/pages` contienen las secciones de cada página. Por ejemplo, [src/pages/\_index](./src/pages/_index/) contiene las secciones de la página de inicio.

- [src/scripts/](./src/scripts/): Contiene los scripts adicionales necesarios para la funcionalidad del proyecto. Estos scripts pueden incluir utilidades, funciones auxiliares o cualquier lógica que esté relacionada con la UI.

- [src/styles/](./src/styles/): Almacena los archivos de estilos que definen la apariencia visual de la aplicación. Aquí se definen elementos visuales o estilos globales.

## 🤝 Contribuir

Si deseas contribuir a este proyecto, puedes hacerlo leyendo la [Guía de Contribución](./CONTRIBUTING.md).

## 📄 Licencia

Este proyecto utiliza la [Licencia MIT](./LICENCE). Consulte el Archivo de Licencia para obtener más información.

---

Proyecto creado por [Felix Icaza](https://felixicaza.com). Badges diseñados por [Luis Perez](https://github.com/Luis-Perez-01).
