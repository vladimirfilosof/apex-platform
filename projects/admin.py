from django.contrib import admin

from projects import models

admin.site.register(models.Project)


class ProductFilesInline(admin.TabularInline):
    model = models.ProductFiles
    extra = 1


class ProductAdmin(admin.ModelAdmin):
    model = models.Product
    inlines = [
        ProductFilesInline
    ]


admin.site.register(models.Product, ProductAdmin)
