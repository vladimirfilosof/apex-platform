from django.contrib.auth import get_user_model
from django.shortcuts import render
from rest_framework import generics
from rest_framework import mixins
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import GenericViewSet

from apex import settings
from users.models import Post
from users.serializers import AccountSerializer, PostSerializer


class MyAccountViewSet(GenericViewSet, mixins.RetrieveModelMixin):
    queryset = get_user_model().objects.all()
    serializer_class = AccountSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user


class AccountViewSet(GenericViewSet, mixins.RetrieveModelMixin):
    queryset = get_user_model().objects.all()
    serializer_class = AccountSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.queryset.get(id=self.kwargs['id'])


class PostViewSet(GenericViewSet, mixins.ListModelMixin, mixins.CreateModelMixin, mixins.DestroyModelMixin):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = self.queryset.filter(user=self.request.user)
        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
