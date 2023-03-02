from django.db import models


# Create your models here.

class Student(models.Model):
    studentId = models.AutoField(primary_key=True)
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    registrationNumber = models.CharField(max_length=100)
    email = models.EmailField()
    course = models.CharField(max_length=100)
