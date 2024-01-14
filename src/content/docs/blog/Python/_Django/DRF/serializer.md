# View foreikey
    
`Models.py`

```py
class Skills(models.Model):
    name = models.CharField(max_length=255)
    image =  models.URLField( null=True, blank=True)
    description = models.TextField()
    order = models.IntegerField()
    def __str__(self):
        return self.name

class Projects(models.Model):
    name = models.CharField(max_length=255)
    date = models.DateField()
    description = models.TextField()

    gitHub =  models.URLField(blank=True)
    live =  models.URLField(blank=True)
    image =  models.URLField( null=True, blank=True)
    
    skills = models.ManyToManyField(Skills, related_name="projects")
    
    def __str__(self):
        return self.name
```

`serializers.py`
```py
class SkillsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = '__all__'

class ProjectsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = '__all__'
    skills = SkillsSerializers(many=True)
```