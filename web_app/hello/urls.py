from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("bruce", views.bruce, name="bruce"),
    path("<str:name>", views.greet, name="greet"),
]
