from django.shortcuts import render

# Create your views here.

from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseRedirect, JsonResponse


@csrf_exempt
def Main(request):
    print("triggerd")
    return JsonResponse({
        "status": "ok"
    })