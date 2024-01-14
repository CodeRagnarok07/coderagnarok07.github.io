Description
Context
Suppose you're maintaining a Django REST API which provides information about customers.

Python 3.8+
Django 3.2
Django-Rest-Framework 3.12
The system is composed of the following main components:

A model (for data persistence via a simple SQLite database).
domain.models module
A REST API (for read-only data access).
domain.api package
A Geocoding service (for reaching out to e.g. Google's Location API and retrieve coordinates for an address).
domain.services module
You can use https://example.com endpoint and XYZ apikey when initializing the class on this module since on the tests, we're mocking requests.get method and returning a hardcoded response contained on domain.tests.fixtures module.
A management command for importing customer data from a CSV.
domain.management.commands.import_customers module
Configurations
config.settings module
The following fields should be part of your model:

id
first_name
last_name
email
gender
company
city
title
lat
lng
The following CSV provides example data which will be imported into this system:

id,first_name,last_name,email,gender,company,city,title
1,Laura,Richards,lrichards0@reverbnation.com,Female,Meezzy,"Warner, NH",Biostatistician III
2,Margaret,Mendoza,mmendoza1@sina.com.cn,Female,Skipfire,"East Natchitoches, PA",VP Marketing
3,Craig,Mccoy,cmccoy2@bluehost.com,Male,Quatz,"Lyon, WV",Senior Sales Associate
Notice that coordinates (fields lat/lng) are not present on the CSV as they're not part of the initial data imported to the application, only updated into it afterwards.

There's no need for you to generate the migrations. The test runner will automatically remove all migration files.

Task
Wherever you see # TODO: HERE, you should write the corresponding code.

Finish setting up the Customer model using django's built-in fields. Make sure to choose appriopriate fields that enforce good data integrity (i.e. avoid bad data getting into the database).
Finish writing the management command making sure that it fits its docstring.
Finish writing the modules on domain.api package (modules api_router, serializers and views).
Improve the Geocoding service (module domain.services) such that we save on requests when using that class. That's an expensive API to call and our budget is limited!
Also on the Geocoding service, there's a bug where a type annotation (which is correct) doesn't match the current behavior (currently wrong). Can you find it and fix it?
[execution time limit] 10 seconds