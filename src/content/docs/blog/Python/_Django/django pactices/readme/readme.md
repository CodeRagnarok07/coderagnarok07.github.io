# [baseComman](https://docs.djangoproject.com/en/4.0/howto/custom-management-commands/)

README
Filesystem with Unit Tests
Your solution, which can be written in one or multiple files, will be verified with unit tests.

Environment Language
Python v3.9.5

You can use print(...) to print any data for debugging purposes.

The following libraries are available to be imported:

import appdirs
import attr
import basilica
import click
import configparser
import django
import eli5
import flask
import flask_migrate
import flask_sqlalchemy
import gensim
import ipywidgets
import keras
import matplotlib
import mysql.connector
import nltk
import notebook
import pandas
import pandas_profiling
import pdpbox
import plotly
import psycopg2
import pymongo
import pytest
import requests
import scipy
import seaborn
import shap
import sklearn
import sortedcontainers
import spacy
import sqlalchemy
import tensorflow
import timeout_decorator
import toml
import toolz
import tweepy
import xgboost

import json
import math
import string
import re
import random
import sys
import traceback
import functools
from collections import OrderedDict

import numpy
import sortedcontainers
Testing Framework
Django unittest v4.0.4

Verdicts
After you submit your code for testing, the following verdicts are possible:

Compilation/syntax error - This means you probably have some syntax errors in your source code. More detailed information will be given along with the verdict to help you identify the issue.
Execution error - This means your code has crashed. Most likely, it crashes only for some input parameters. More detailed information will be given along with the verdict to help you identify the issue.
Compilation time exceeded - This verdict happens rarely, mostly for C++ or Java. This means that your code is either too long or you overused templates, which results in very slow compilation of your code.
Execution time limit exceeded - This means that your code didn't finish executing within the given time limit. It either got hung up on one of the test cases, or it just works very slowly. It's likely that your solution is either not optimally efficient, or you have a bug in the code.
Output limit exceeded - This verdict happens rarely. It means that either your function return value size is too big (e.g. you returned a very big array or matrix), or that you overused console outputs and essentially spammed it with a lot of data. One possible cause of such an issue is that you have a console output inside an infinite loop.
Wrong answer - This verdict means that your code was compiled and ran successfully, but it returned an incorrect output for one or more test cases. More detailed information will be provided to help you diagnose the issue.
All tests passed - This means that your code works correctly and passed all the tests within the given time limit.