# Generated by Django 5.0.1 on 2024-01-25 17:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('passwords', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Choice',
            new_name='Pass',
        ),
    ]
