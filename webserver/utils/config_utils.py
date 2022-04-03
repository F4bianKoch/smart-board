import json


class ConfigNotFoundError(Exception):
    ''' This Error is getting raised if webserver/main/settings.json is not found'''

    pass


def search_for_config():
    ''' Tries to find settings.json file '''
    try:
        f = open('main/config.json')
        return True
    except FileNotFoundError:
        return False


def get_config_data():
    ''' Returns config.json as dictionary '''
    try:
        f = open('main/config.json')
        config = json.load(f)
        f.close()
        return config
    except FileNotFoundError:
        raise ConfigNotFoundError
