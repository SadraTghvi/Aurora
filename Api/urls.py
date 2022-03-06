from django.urls import path,include

from Api.views import *


urlpatterns = [
    path("test/",Main,name="main"),

]
