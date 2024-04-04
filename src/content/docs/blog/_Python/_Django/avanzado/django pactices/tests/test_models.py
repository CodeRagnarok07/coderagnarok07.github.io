from django.core.exceptions import ValidationError
from django.test import TestCase

from domain.models import Customer


class ModelTests(TestCase):
    def setUp(self) -> None:
        self.customer_data = dict(
            id=1,
            first_name="Laura",
            last_name="Richards",
            email="lrichards0@reverbnation.com",
            gender="Female",
            company="Meezzy",
            city="Warner, NH",
            title="Biostatistician III",
        )
        return super().setUp()

    def test_has_fields(self):
        # Fails in case the fields are not declared
        customer = Customer(**self.customer_data)
        customer.full_clean()

    def test_gender_field(self):
        customer = Customer(**self.customer_data)
        customer.gender = "Dummy"
        with self.assertRaises(ValidationError):
            customer.full_clean()

    def test_email_field_validation(self):
        customer = Customer(**self.customer_data)
        customer.email = "invalid"
        with self.assertRaises(ValidationError):
            customer.clean_fields()