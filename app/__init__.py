from flask import Flask
from config import Config, DebugConfig

def create_app(config_class=DebugConfig):
    app = Flask(__name__)
    app.config.from_object(config_class)
    app.config['DEBUG'] = True

    from app.main import bp as main_bp
    app.register_blueprint(main_bp)

    return app