#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
from shutil import ExecError
import sys

from utils import search_for_config


class ConfigNotFoundError(Exception):
    ''' This Error is getting raised if webserver/main/settings.json is not found'''

    pass


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webserver.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    if search_for_config():
        execute_from_command_line(sys.argv)
    else:
        raise ConfigNotFoundError('webserver/main/config.json file was not found')


if __name__ == '__main__':
    main()
