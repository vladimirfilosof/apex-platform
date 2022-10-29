from django.db.models import Count
from rest_framework import viewsets, mixins
from rest_framework.viewsets import ModelViewSet, GenericViewSet

from projects.models import Product, Project, Vote
from projects.serializers import ProductSerializer, ProjectSerializer, VoteSerializer


class ProductView(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ProjectView(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ProductsOnProjectView(viewsets.GenericViewSet, mixins.ListModelMixin):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = self.queryset.filter(for_project=self.kwargs['project_id']).annotate(
            is_vote=Count('votes__user', votes__user=self.request.user)
        ).annotate(
            vote_count=Count('votes')
        ).order_by('-vote_count')

        return queryset


class VoteView(ModelViewSet):
    queryset = Vote.objects.all()
    serializer_class = VoteSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class MyProductView(GenericViewSet, mixins.ListModelMixin):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = self.queryset.filter(user=self.request.user)
        return queryset


class MyProjectView(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_queryset(self):
        queryset = self.queryset.filter(user=self.request.user)
        return queryset
