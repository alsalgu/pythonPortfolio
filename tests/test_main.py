from flask import url_for


def test_routes(client):
    assert client.get(url_for('main.index')).status_code == 200