from django.urls import path

from . import views

urlpatterns = [
    # Actual path, function to call, helpful name to refer to it later in the code
    path("", views.index, name="index"),
    path("bruce", views.bruce, name="bruce"),
    path("<str:name>", views.greet, name="greet"),
]
