from django.core.management import BaseCommand

class Command(BaseCommand):
    """Command for importing a properly-formatted CSV file with
    customer data into the database.

    # Notes
    - Handles both creating and updating customer records.
    - Uses the file's `id` column as the `id` primary key for our database row.
    - Log messages uses stdout.

    # Expected format:
    ```csv
    id,first_name,last_name,email,gender,company,city,title
    1,Laura,Richards,lrichards0@reverbnation.com,Female,Meezzy,"Warner, NH",Biostatistician I
    ```
    """

    help = "Import customers from CSV into database. Expects one argument containing the file path."

    def add_arguments(self, parser):
        pass  # TODO: HERE

    def handle(self, *args, **options):
        pass  # TODO: HERE

        with open(options["filepath"]) as file:
            pass  # TODO: HERE
