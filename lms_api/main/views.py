from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
# from rest_framework import permissions
from .serializers import TeacherSerializer,CategorySerializer,CourseSerializer
from . import models

class TeacherList(generics.ListCreateAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes=[permissions.IsAuthenticated]

class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes=[permissions.IsAuthenticated]
@csrf_exempt 
def teacher_login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        try:
            teacherData = models.Teacher.objects.get(email=email, password=password)
            return JsonResponse({'bool': True})
        except ObjectDoesNotExist:
            return JsonResponse({'bool': False, 'error': 'Teacher not found with the provided credentials'})
        except models.Teacher.MultipleObjectsReturned:
            return JsonResponse({'bool': False, 'error': 'Multiple teachers found with the provided credentials'})
    else:
        return JsonResponse({'error': 'Only POST requests are allowed for teacher login'})

class CategoryList(generics.ListCreateAPIView):
    queryset = models.CourseCategory.objects.all()
    serializer_class = CategorySerializer
    # permission_classes=[permissions.IsAuthenticated]

# course
class CourseList(generics.ListCreateAPIView):
    queryset = models.Course.objects.all()
    serializer_class = CourseSerializer
    # permission_classes=[permissions.IsAuthenticated]

def create_course(request):
    if request.method == 'POST':
        serializer = CourseSerializer(data=request.POST, files=request.FILES)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'bool': True})
        else:
            return JsonResponse({'error': serializer.errors})

