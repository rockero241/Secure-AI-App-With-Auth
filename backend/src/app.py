from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from .routes import challenge

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
   allow_origins=["*"],
   allowe_credentials=True,
   allow_methods=["*"],
   allowe_headers=["*"]
)

app.include_router(challenge.router, prefix="/api")