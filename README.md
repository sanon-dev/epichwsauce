# epichwsauce

## Demo Installation Guide

Note: The following command assumes you have postgresql, npm correctly installed. Also you are running on unix

1. Clone the repo
    ```
    $ git clone <"link to repo">
    ```
2. Set up database
    1. Edit backend/backend/settings.py
        ```
        DATABASES = {
            'default': {
                'ENGINE': 'django.db.backends.postgresql',
                'NAME': 'db1',
                'USER': 'user1',
                'PASSWORD': 'db_pass',
                'HOST': 'localhost',
                'PORT': '6969',
            }
        }
        ```
    2. Create db
        1. Go to a local directory (where you want to store db)
            ```
            $ initdb .
            ```
        2. Edit postgresql.conf
            ```
            port = 6969
            ```
    3. Set up user
        ```
        $ createuser -s postgres (if you haven't already)
        $ psql -U postgres
        ```
        ```
        CREATE USER user1 WITH PASSWORD 'db_pass';
        CREATE DATABASE db1 OWNER user1;
        GRANT ALL PRIVILEGES ON DATABASE db1 TO user1;
        \q
        ```
    4. Start db
        ```
        $ pg_ctl -D . start
        ```
3. Start backend server
    ```
    $ python3 manage.py migrate
    $ python3 manage.py runserver
    ```
4. Configure frontend
    1. Install frontend packages
        ```
        $ npm install
        ```
    2. Test frontend installation
        ```
        $ npx expo start
        ```
    3. If watchman is freaking out, try the following
        ```
        $ watchman watch-del-all
        $ watchman shutdown-server
        ```