from rest_framework import viewsets, generics
from .models import Pass, Customer
from .serializers import PassSerializer, CustomerSerializer
from django.http import HttpResponse

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class PasswordList(generics.ListCreateAPIView):
    serializer_class = PassSerializer

    def get_queryset(self):
        queryset = Pass.objects.filter(user = self.kwargs['pk'])
        return queryset

class PasswordDetail(generics.RetrieveDestroyAPIView):
    serializer_class = PassSerializer

    def get_queryset(self):
        queryset = Pass.objects.all()
        return queryset
    
    def put(self, request, pk):
        password = self.get_object()
        serializer = PassSerializer(password, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return HttpResponse('200')
        return HttpResponse('400')
    