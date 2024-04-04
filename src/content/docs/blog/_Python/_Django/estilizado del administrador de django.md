# Modificar estilos del administrador de django

Copia la carpeta a tu carpeta static
env/lib/python3.8/site-packages/django/contrib/admin/static/admin/

a /{static_root}/


# Mejoras: 

### Formularios y titulos alineados en columnas
`forms.css`
```css
.form-row >div{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 100vw;
}

```

### check box aling

```css
.form-row> div.checkbox-row{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    height: 100%;
}

.form-row> div.checkbox-row>input,
.form-row> div.checkbox-row>label {
    display: flex;
    width: min-content;
    padding: 0px;
    margin: 0px;
}

.form-row>div>div .help{
    margin-left: 0px;
}

```




You may want either AdminInline or list_editable Django features:

If you have linked models, say a Project and a Product, which is linked to Project, you can make your product editable as inlines:

class ProductInline(admin.TabularInline):
    model = Product

class Project(admin.ModelAdmin):
    model = Project
    inlines = [ProductInline, ]
If you have a standalone table, say, Product, you can make its list to be editable:

class ProductAdmin(admin.ModelAdmin):
    model = Product
    list_display = ['quantity', 'description', 'tax_rate', ] 
    list_editable = ['quantity', 'description', 'tax_rate', ] 