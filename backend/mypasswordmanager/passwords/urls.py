from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CustomerViewSet, PasswordList, PasswordDetail

router = DefaultRouter()
router.register(r'customer', CustomerViewSet, basename='cust')
# router.register(r'customer/password', PasswordList, basename='pass')

urlpatterns = [
    path("", include(router.urls)),
    path('customer/<pk>/passwords', PasswordList.as_view() , name='pass'),
    path('passwords/<int:pk>', PasswordDetail.as_view() , name='specific_pass')
]