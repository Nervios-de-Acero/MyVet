### BackEnd:

### Requisitos previos. 
* Deben tener instalado [Python y pip](https://www.python.org/downloads/). Se procederán las instrucciones con un entorno virtual.

* ⚠ Las instrucciones que inician en "python" pueden variar a "python3" con SO Linux.

## Instalación y configuración del entorno virtual

Crea una carpeta para el entorno virtual. Se recomienda en la raíz del directorio backend; **asegúrate de agregar el nombre de la carpeta al archivo .gitignore.**.

Dentro de ella, crea el entorno ejecutando el comando:

```bash
python -m venv nombre-proyecto
```

Activa el entorno virtual moviéndote con 'cd' a tu carpeta **nombre-proyecto** y ejecuta el comando:

```bash
Scripts/activate
```

**Recuerda que debes activar el entorno virtual cada vez que trabajes en el proyecto.**

Con el entorno virtual ya activo, ejecuta el siguiente comando para instalar todas las dependencias del proyecto:


## Base de datos

La base de datos será local por ahora.
En el archivo settings.py de la carpeta 

## Uso del server

Ejecutar el servidor local con el comando:

```bash
$ python manage.py runserver

```

Brindará una URL que suele ser http://127.0.0.1:8000. Al abrirla debe haber una interfaz como la siguiente:

![Instalación exitosa](https://tutorial.djangogirls.org/es/django_start_project/images/install_worked.png)