from django.urls import path, include
from rest_framework.routers import DefaultRouter

from projects import views

projects_router = DefaultRouter()
projects_router.register(r'', views.ProjectView, basename='projects')
projects_router.register(r'my', views.ProjectView, basename='my-projects')

products_router = DefaultRouter()
products_router.register(r'', views.ProjectView, basename='products')
products_router.register(r'my', views.ProjectView, basename='my-products')

urlpatterns = [
    path('projects/', include(projects_router.urls)),
    path('products/', include(products_router.urls)),
    path('vote/', views.ProjectView),
    path('products-on-project/<int:project_id>/', views.ProductsOnProjectView.as_view({'get': 'list'})),
]