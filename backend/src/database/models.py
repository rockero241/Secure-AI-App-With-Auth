from sqlalchemy import Column, Integer, String, DateTime, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

engine = create_engine("'sqlite:///database.db, echo=True")
Base = declarative_base()

class Challenge(Base):
    # Defines the table name for the Challenge model in the database.
    __tablename__ = "challenges"

    id = Column(Integer, primary_key=True)
    dfficulty = Column(String, nullable=False)
    date_created = Column(DateTime, default=datetime.now)
    created_by = Column(String, nullable=False)
    options = Column(String, nullable=False)
    correct_answer_id = Column(String, nullable=False)
    explanaition = Column(String, nullable=False)


class ChallengeQuota(Base):
    # This model tracks the number of challenges a user can attempt and when their quota was last reset.
    __tablename__ = 'challenge_quota'

    id = Column(Integer, primary_key=True)
    user_id = Column(String, nullable=False, unique=True)
    quota_remaining = Column(Integer, nullable=False, default=50)
    last_reset_date = Column(DateTime, default=datetime.now)


Base.metadata.create_all(engine)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    # Create a new database session using the SessionLocal configuration
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()