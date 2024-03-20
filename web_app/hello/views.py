from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request):
    return render(request, "hello/index.html")


def bruce(request):
    return HttpResponse("Hello, Bruce!")


def greet(request, name: str):
    return HttpResponse(f"Hello, {name.capitalize()}!")
