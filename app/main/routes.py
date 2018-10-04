from flask import Flask, render_template, redirect
from flask import url_for, flash, jsonify, request
from app.main import bp
import requests

@bp.route('/')
def index():
    return render_template('index.html')

@bp.route('/aesthetic')
def aesthetic():
    return render_template('extras/aesthetic.html')

@bp.route('/projects/')
@bp.route('/projects')
def projects():
    return render_template('pages/projects.html')

@bp.route('/art/')
@bp.route('/art')
def art():
    return render_template('pages/art.html')

# Error Handlin'
@bp.app_errorhandler(404)
def not_found(error):
    return redirect(url_for('main.aesthetic'))


@bp.app_errorhandler(500)
def internal_error(error):
    return redirect(url_for('main.aesthetic'))
