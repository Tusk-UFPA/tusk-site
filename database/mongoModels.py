import uuid
from typing import Optional
from pydantic import BaseModel, Field

class user(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    nome: str = Field(...)
    email: str = Field(...)

    class Config:
        # allow_population_by_field_name = True
        populate_by_name = True
        json_schema_extra = {
            "example": {
                "_id": "066de609-b04a-4b30-b46c-32537c7f1f6e",
                "nonme": "Don Quixote",
                "email": "tusk@gmail.com",
            }
        }
        
class accesse(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    count: int = Field(...)

    class Config:
        # allow_population_by_field_name = True
        populate_by_name = True
        json_schema_extra = {
            "example": {
                "_id": "066de609-b04a-4b30-b46c-32537c7f1f6e",
                "count": 1,
            }
        }