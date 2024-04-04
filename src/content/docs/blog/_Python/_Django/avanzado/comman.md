```py
from django.core.management import BaseCommand, CommandError
# https://docs.djangoproject.com/en/4.0/howto/custom-management-commands/


class Command(BaseCommand):
    help = "simple test que ejecuta un for"

    #python manage.py comman_test 5 2  => crea una lista de argumentos indefinidos
    def add_arguments(self, parser):
        parser.add_argument('ids', 
                            nargs="+", # determina la cantidad de argumentos que se le puede añadir 5 2 3
                            default=1,
                            type=int)
        parser.add_argument('--for', 
                            default=False, 
                            action='store_true', # lo clasifica como opcion que se puede agragar // python manage.py comman_test 6 --for
                            help="ejecuta un for al argumento")

    def handle(self, *args, **options):
        # argumento1 = options.get('ids', None)
        value1 =  options['ids']        
        self.stdout.write(f'argumento aceptado {value1[0]}' , ending="\n")

        # ejecutar un for > python manage.py comman_test 6 --for
        if options['for']:
            for id in range(int(value1[0])):
                self.stdout.write(f'argumento aceptado {value1} {id}' , ending="\n")






        # with open(options["filepath"]) as file:
            #     pass  # TODO: HERE
            ```