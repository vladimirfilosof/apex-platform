from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from projects import models
from users.serializers import UserSerializer


class ProductFilesSerializer(ModelSerializer):
    class Meta:
        model = models.ProductFiles
        fields = '__all__'


class ProductSerializer(ModelSerializer):
    files = ProductFilesSerializer(many=True)
    user = UserSerializer(many=False)
    is_vote = serializers.BooleanField(
        read_only=True
    )
    vote_count = serializers.IntegerField(
        read_only=True
    )

    class Meta:
        model = models.Product
        fields = '__all__'


class ProjectSerializer(ModelSerializer):
    user = UserSerializer(many=False)
    selected_work = ProductSerializer(many=False)

    class Meta:
        model = models.Project
        fields = '__all__'


class VoteSerializer(ModelSerializer):
    class Meta:
        model = models.Vote
        fields = '__all__'

