from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request) -> HttpResponse:
    return render(request, "hello/index.html")


def bruce(request) -> HttpResponse:
    return HttpResponse("Hello, Bruce!")


""" Django template"""


def greet(request, name: str) -> HttpResponse:
    """_summary_

    Args:
        request (_type_): _description_
        name (str): _description_

    Returns:
        HttpResponse: _description_
    """
    return render(
        request,
        template_name="hello/greet.html",
        context={
            "name": name.capitalize()
        },  # Context argument to provide additional information to an HTML template
    )
