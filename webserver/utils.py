import json


class SettingsFileNotAvailable(Exception):
    ''' Is raised when settings.json file is not found '''
    
    pass


def search_for_settings():
    ''' Tries to find settings.json file '''
    try:
        f = open('main/settings.json')
        settings_json = json.load(f)
        return True
    except FileNotFoundError:
        return False