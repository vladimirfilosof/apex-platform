from django.contrib.auth import get_user_model
from rest_framework.serializers import ModelSerializer

from users.models import Post


class UserSerializer(ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id','email', 'phone', 'full_name', 'avatar')


class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        exclude = ('user',)


class AccountSerializer(ModelSerializer):
    posts = PostSerializer(many=True, read_only=True)

    class Meta:
        model = get_user_model()
        fields = ('id', 'email', 'phone', 'full_name', 'avatar', 'posts')
