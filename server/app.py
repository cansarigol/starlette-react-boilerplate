from starlette.applications import Starlette
from starlette.requests import Request
from starlette.responses import Response
from starlette.templating import Jinja2Templates
from starlette.staticfiles import StaticFiles


app = Starlette(debug=True)
app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")


@app.route("/")
async def homepage(request: Request) -> Response:
    context = {"request": request}
    return templates.TemplateResponse("index.html", context)
