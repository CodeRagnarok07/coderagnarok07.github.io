from domain.services import LocationService
from requests.exceptions import HTTPError, Timeout
from unittest import TestCase
from unittest.mock import patch


class LocationServiceTestCase(TestCase):
    def setUp(self) -> None:
        self.location_service = LocationService("http://example.com/", "Fake API KEY")

    def test_google_api_without_results(self):
        zero_results = {"results": [], "status": "ZERO_RESULTS"}
        with patch("requests.get") as mock_get:
            response = mock_get.return_value
            response.json.return_value = zero_results
            with self.assertRaisesRegex(Exception, "results"):
                self.location_service.get_coordinates("Toledo, OH")

    def test_can_raise_exceptions_by_status_code(self):
        with patch("requests.get") as mock_get:
            response = mock_get.return_value
            response.raise_for_status.side_effect = HTTPError("Any http error")

            with self.assertRaises(HTTPError):
                self.location_service.get_coordinates("Toledo, OH")

    def test_can_raise_exceptions_by_timeout(self):
        with patch("requests.get") as mock_get:
            mock_get.side_effect = Timeout("Timeout Error")

            with self.assertRaises(Timeout):
                self.location_service.get_coordinates("Toledo, OH")