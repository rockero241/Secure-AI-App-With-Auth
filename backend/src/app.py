from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware

clerk_skd = Clerk(bearer_auth=os.getenv("CLERK_SECRET_KEY"))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
   allow_origins=["*"],
   allowe_credentials=True,
   allow_methods=["*"],
   allowe_headers=["*"]
)