import inspect
import os
import shutil
from django.core import management

tests_dir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
domain_dir = os.path.dirname(tests_dir)
root_dir = os.path.dirname(domain_dir)

migrations_dir = os.path.join(domain_dir, "migrations")
if os.path.exists(migrations_dir):
    shutil.rmtree(migrations_dir)

sqlite_dump_path = os.path.join(root_dir, "db.sqlite3")
if os.path.exists(sqlite_dump_path):
    os.remove(sqlite_dump_path)

os.makedirs(migrations_dir)

open(os.path.join(migrations_dir, "__init__.py"), 'w').close()

management.call_command("makemigrations")
