from rest_framework import serializers
from .models import Student


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('studentId',
                  'firstName',
                  'lastName',
                  'registrationNumber',
                  'email',
                  'course')
