class Config(object):
    SECRET_KEY = 'Felix'

class DebugConfig(Config):
    DEBUG = True

class TestConfig(Config):
    TESTING = True
    DEBUG = False
    WTF_CSRF_ENABLED = False