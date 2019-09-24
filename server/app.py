from starlette.applications import Starlette
from starlette.requests import Request
from starlette.responses import Response
from starlette.staticfiles import StaticFiles
from starlette.templating import Jinja2Templates

from pony.orm import db_session
from models import connect_db
from models.entities import Person


connect_db()
app = Starlette(debug=True)
app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")


@db_session
@app.route("/")
async def homepage(request: Request) -> Response:
    Person(name='Can', age=33)
    commit()
    context = {"request": request, "person": Person}
    return templates.TemplateResponse("index.html", context)
