# Generated by Django 4.2.2 on 2023-06-14 17:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id_usuario', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
                ('apellido', models.CharField(blank=True, max_length=50, null=True)),
                ('telefono', models.CharField(max_length=15)),
                ('email', models.CharField(max_length=150)),
                ('contrasena', models.CharField(max_length=15)),
                ('dni', models.CharField(max_length=8)),
                ('direccion', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Usuario',
                'verbose_name_plural': 'Usuarios',
                'db_table': 'usuario',
            },
        ),
    ]
