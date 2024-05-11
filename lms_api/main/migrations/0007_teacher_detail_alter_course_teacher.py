# Generated by Django 5.0.3 on 2024-05-11 13:15

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_alter_chapter_course'),
    ]

    operations = [
        migrations.AddField(
            model_name='teacher',
            name='detail',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='course',
            name='teacher',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='teacher_courses', to='main.teacher'),
        ),
    ]
