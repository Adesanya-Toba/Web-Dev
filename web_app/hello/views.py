from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request) -> HttpResponse:
    return render(request, "hello/index.html")


def bruce(request) -> HttpResponse:
    return HttpResponse("Hello, Bruce!")


def greet(request, name: str) -> HttpResponse:
    return render(
        request,
        template_name="hello/greet.html",
        context={
            "name": name.capitalize()
        },  # Context argument to provide additional information to an HTML template
    )
