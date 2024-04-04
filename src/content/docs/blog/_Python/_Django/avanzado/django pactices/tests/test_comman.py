import tempfile
from django.core.management import CommandError, call_command
from django.test import TestCase
from domain.models import Customer
from io import StringIO
from typing import List
from unittest import mock


class ImportCustomersCommandTest(TestCase):
    def _generate_file_content(self, rows: List[str]):
        return "\n".join(
            [
                "id,first_name,last_name,email,gender,company,city,title",
                *rows,
            ],
        )

    def test_call_command_requires_arguments(self):
        with self.assertRaises(CommandError):
            call_command("import_customers")

    def test_create_customer(self):
        filename = tempfile.NamedTemporaryFile().name
        data = [
            '1,Laura,Richards,lrichards0@reverbnation.com,Female,Meezzy,"Warner, NH",Biostatistician III',
            '2,Margaret,Mendoza,mmendoza1@sina.com.cn,Female,Skipfire,"East Natchitoches, PA",VIP Marketing',
        ]
        content = self._generate_file_content(data)
        with open(filename, "w") as file:
            file.write(content)
        queryset = Customer.objects.all()
        self.assertEqual(queryset.count(), 0)
        call_command("import_customers", filename)
        self.assertEqual(queryset.count(), len(data))

    def test_update_existing_customer(self):
        filename = tempfile.NamedTemporaryFile().name
        customer = Customer.objects.create(
            **{
                "id": 1,
                "first_name": "Laura",
                "last_name": "Richards",
                "email": "lrichards0@reverbnation.com",
                "gender": "Female",
                "company": "Meezzy",
                "city": "Warner, NH",
                "title": "Biostatistician III",
            }
        )
        new_email = "laurarichards@reverbnation.com"
        new_title = "Biostatistician IV"
        new_city = "Lyon, WV"
        data = [
            # Updated email and title
            f'1,Laura,Richards,{new_email},Female,Meezzy,"{new_city}",{new_title}',
        ]
        content = self._generate_file_content(data)
        with open(filename, "w") as file:
            file.write(content)
        call_command("import_customers", filename)
        customer.refresh_from_db()
        self.assertEqual(customer.email, new_email)
        self.assertEqual(customer.title, new_title)
        self.assertEqual(customer.city, new_city)

    def test_command_output_to_stdout(self):
        filename = tempfile.NamedTemporaryFile().name
        data = [
            '1,Laura,Richards,lrichards0@reverbnation.com,Female,Meezzy,"Warner, NH",Biostatistician III',
            '2,Margaret,Mendoza,mmendoza1@sina.com.cn,Female,Skipfire,"East Natchitoches, PA",VIP Marketing',
        ]
        content = self._generate_file_content(data)
        with open(filename, "w") as file:
            file.write(content)
        with mock.patch("sys.stdout", new=StringIO()) as mocked_stdout:
            call_command("import_customers", filename)

        outputted_data = [
            s for s in mocked_stdout.getvalue().strip().split("\n") if s != ""
        ]
        # Expect at least 1 stdout statement, to tell command has executed anything, at least.
        self.assertGreater(len(outputted_data), 1)
