###########
# BUILDER #
###########
# pull official base image
FROM python:3.9 as builder
# set work directory
WORKDIR /usr/src/app
# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
# install psycopg2 dependencies
RUN apt update && apt install -y postgresql musl-dev gcc
# lint
RUN pip install --upgrade pip
RUN pip install flake8
COPY . .
# RUN flake8 --ignore=E501,F401 .
# install dependencies
COPY ./requirements.txt .
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /usr/src/app/wheels -r requirements.txt


#########
# FINAL #
#########
# pull official base image
FROM python:3.9
# create directory for the app user
RUN mkdir -p /home/app
# create the app user
RUN groupadd app && useradd app -g app
# create the appropriate directories
ENV HOME=/home/app
ENV APP_HOME=/home/app/backend
RUN mkdir $APP_HOME
WORKDIR $APP_HOME
# install dependencies
RUN apt update && apt install libpq5
COPY --from=builder /usr/src/app/wheels /wheels
COPY --from=builder /usr/src/app/requirements.txt .
RUN pip install --no-cache /wheels/*
# copy entrypoint-prod.sh
COPY ./entrypoint.prod.sh $APP_HOME
# copy project
COPY . $APP_HOME
# chown all the files to the app user
RUN chown -R app:app $APP_HOME
# change to the app user
USER app
# run entrypoint.prod.sh
#ENTRYPOINT ["/home/app/backend/entrypoint.prod.sh"]