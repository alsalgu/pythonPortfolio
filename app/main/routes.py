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