from decimal import Decimal
from domain.models import Customer
from rest_framework import status
from rest_framework.test import APITestCase


class RestAPITests(APITestCase):
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
            lat="45",
            lng="120",
        )

    def test_get_customer_list(self):
        Customer.objects.create(**self.customer_data)

        response = self.client.get("/api/customers/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response_json = response.json()
        if "results" in response_json:  # Also works if pagination was used
            response_json = response.json()["results"]

        self.assertEqual(len(response_json), 1)

        response_json_item = response_json[0]
        self.assertEqual(
            Decimal(response_json_item.pop("lat")), Decimal(self.customer_data["lat"])
        )
        self.assertEqual(
            Decimal(response_json_item.pop("lng")), Decimal(self.customer_data["lng"])
        )

        self.assertEqual(
            response_json_item,
            dict(
                id=1,
                first_name="Laura",
                last_name="Richards",
                email="lrichards0@reverbnation.com",
                gender="Female",
                company="Meezzy",
                city="Warner, NH",
                title="Biostatistician III",
            ),
        )

    def test_get_customer_detail(self):
        customer = Customer.objects.create(**self.customer_data)

        response = self.client.get(f"/api/customers/{customer.pk}/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        response_json = response.json()
        self.assertEqual(
            Decimal(response_json.pop("lat")), Decimal(self.customer_data["lat"])
        )
        self.assertEqual(
            Decimal(response_json.pop("lng")), Decimal(self.customer_data["lng"])
        )

        self.assertEqual(
            response_json,
            dict(
                id=1,
                first_name="Laura",
                last_name="Richards",
                email="lrichards0@reverbnation.com",
                gender="Female",
                company="Meezzy",
                city="Warner, NH",
                title="Biostatistician III",
            ),
        )
