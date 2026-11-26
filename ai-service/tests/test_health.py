from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_returns_up_status() -> None:
    response = client.get("/health")

    assert response.status_code == 200
    payload = response.json()
    assert payload["status"] == "UP"
    assert payload["service"] == "finsight-ai-service"
