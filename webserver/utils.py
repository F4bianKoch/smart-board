import json


class SettingsFileNotAvailable(Exception):
    ''' Is raised when settings.json file is not found '''
    
    pass


def search_for_config():
    ''' Tries to find settings.json file '''
    try:
        f = open('main/config.json')
        return True
    except FileNotFoundError:
        return False