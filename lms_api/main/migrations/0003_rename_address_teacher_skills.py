# Generated by Django 5.0.3 on 2024-04-03 09:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_alter_course_options_alter_coursecategory_options_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='teacher',
            old_name='address',
            new_name='skills',
        ),
    ]
