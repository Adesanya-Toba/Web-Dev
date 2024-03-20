import datetime
from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
def index(request) -> HttpResponse:
    now = datetime.datetime.now()
    return render(
        request, "newyear/index.html", {"newyear": now.month == 1 and now.day == 1}
    )
