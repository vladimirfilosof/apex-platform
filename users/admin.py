from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from users.forms import CustomUserCreationForm, CustomUserChangeForm
from users.models import User, Post


class CustomUserAdmin(UserAdmin):
    # list_display = ('email', 'first_name', 'last_name', 'description', 'points',)
    # exclude = ('username', 'last_login', 'user_permissions', 'date_joined', 'groups',)
    # resource_class = UsersResource
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User

    list_display = ('email', 'full_name', 'is_staff', 'is_active',)
    list_filter = ('email', 'is_staff')

    fieldsets = (
        (None,
         {'fields': (
             'email', 'first_name', 'last_name', 'avatar',
             'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'email', 'first_name', 'last_name', 'password1', 'password2', 'is_staff', 'is_active',)}
         ),
    )
    search_fields = ('email',)
    ordering = ('email',)

    class Meta:
        verbose_name = 'пользователи'


admin.site.register(User, CustomUserAdmin)
admin.site.register(Post)
