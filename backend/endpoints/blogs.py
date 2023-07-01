from fastapi import APIRouter

router = APIRouter()


@router.post("/new")
async def new_blog():
    pass
