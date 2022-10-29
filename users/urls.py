from django.urls import path, include
from rest_framework.routers import DefaultRouter

from users import views

post_router = DefaultRouter()
post_router.register('posts', views.PostViewSet, basename="posts")

urlpatterns = [
    path('my-account/', views.MyAccountViewSet.as_view({'get': 'retrieve'})),
    path('account/<int:id>/', views.AccountViewSet.as_view({'get': 'retrieve'})),
    path('', include(post_router.urls))
]
