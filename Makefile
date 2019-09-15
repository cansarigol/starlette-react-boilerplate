run:
	pipenv run uvicorn server:app

lint:
	pipenv run tox

clean:
	pipenv run autoflake --in-place --recursive server tests & \
	pipenv run black server tests & \
	pipenv run isort -rc .
	npx eslint --fix frontend