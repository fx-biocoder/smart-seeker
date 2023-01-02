from django.shortcuts import render
from django.shortcuts import HttpResponse

# Create your views here.
def pagina(request):
    return render(request, 'ProyectoApp/templates/index.html')