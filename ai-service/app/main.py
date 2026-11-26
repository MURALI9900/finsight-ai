from datetime import datetime, timezone

from fastapi import FastAPI

app = FastAPI(
    title="FinSight AI Service",
    description="AI assistant service for the synthetic-data FinSight AI portfolio project.",
    version="0.1.0",
)


@app.get("/health", tags=["health"])
def health() -> dict[str, str]:
    """Return service health without exposing infrastructure details."""
    return {
        "status": "UP",
        "service": "finsight-ai-service",
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }
