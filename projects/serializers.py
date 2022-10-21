from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from projects import models


class ProductFilesSerializer(ModelSerializer):
    class Meta:
        model = models.ProductFiles
        fields = '__all__'


class ProductSerializer(ModelSerializer):
    files = ProductFilesSerializer(many=True)

    class Meta:
        model = models.Product
        fields = '__all__'


class ProjectSerializer(ModelSerializer):
    file = serializers.FileField()

    class Meta:
        model = models.Project
        fields = ('')


class VoteSerializer(ModelSerializer):
    class Meta:
        model = models.Vote
        fields = '__all__'

