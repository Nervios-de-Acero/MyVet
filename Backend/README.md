# MyVet | Backend

### Requisitos previos.

* Deben tener instalado [Python y pip](https://www.python.org/downloads/). Se procederán las instrucciones con un entorno virtual.
* ⚠ Las instrucciones que inician en "python" pueden variar a "python3" con SO Linux.
* Recomendamos tener instalado una herramienta visual de MySQL como PhpMyAdmin (con XAMPP) o MySQL Workbench.

## Instalación y configuración del entorno virtual

Crea una carpeta para el entorno virtual. Se recomienda en la raíz del directorio Backend; **asegúrate de agregar el nombre de tu nueva carpeta al archivo .gitignore.** (o utiliza de nombre alguno de los que ya figure allí, como **myvet_proyect_virtual** o **myvet_virtual**).

Dentro de ella, crea el entorno ejecutando el comando:

```bash
python -m venv nombre-entorno-virtual
```

Activa el entorno virtual moviéndote con 'cd' a tu carpeta **nombre-entorno-virtual** y ejecuta el comando:

```bash
Scripts/activate
```

o situado en la carpeta Backend

```bash
nombre-entorno-virtua/Scripts/activate
```

**Recuerda que debes activar el entorno virtual cada vez que trabajes en el proyecto.**

Con el entorno virtual ya activo, dirígete a la carpeta "backend/myvet_project" donde se encuentra el archivo **requirements.txt** y ejecuta el siguiente comando para instalar todas las dependencias del proyecto:

```bash
python -m pip install -r requirements.txt
```


El proceso puede demorar. Una vez finalizado, tendrás todas las dependencias necesarias para trabajar con el proyecto instaladas.

*Si en algún momento necesitas desactivar el entorno virtual, puedes hacerlo con el comando:

```bash
deactivate
```

## Base de datos

La base de datos será local por ahora.

Es importante que se modifique en el archivo **settings.py** (*backend/myvet_project/myvet_project/settings*) .
con el USER, PASSWORD y PORT que tengas en tu PhpMyAdmin (con XAMPP) o MySQL Workbench. Tambien si gustan pueden nombrar de otra manera a la base de datos.

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'myvet', # NOMBRE BD
        'USER': 'root', # U OTRO
        'PASSWORD': '', # CONTRASEÑA DE USER
        'HOST': 'localhost',
        'PORT': '3306', # POR DEFECTO, SI TIENEN OTRO CAMBIAR
        'OPTIONS': {
            'sql_mode': 'traditional'
        }
    }
}
```

Recuerden crear la Base de Datos ('NAME') con MySQL utilizando herramientas como la terminal, PhpMyAdmin o Workbench (solo la base de datos, para conectarla):

```sql
CREATE DATABASE IF NOT EXISTS nombre_base_de_datos;
```

## Uso del server

Ejecutar el servidor local (backend/myvet_project) con el comando:

```bash
python manage.py runserver
```

Brindará una URL que suele ser http://127.0.0.1:8000. Al abrirla debe haber una interfaz como la siguiente:

![Instalación exitosa](https://tutorial.djangogirls.org/es/django_start_project/images/install_worked.png)

## Superusuario

Deberán crear un superusuario para acceder al panel admin en la direción http://127.0.0.1:8000/admin.

En backend/myvet_project ejecutar el comando:

```bash
python manage.py createsuperuser
```

Y establecer los datos requeridos, en nuestro caso se valida con email y password.