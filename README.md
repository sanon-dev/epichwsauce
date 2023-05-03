# epichwsauce

## Demo Installation Guide
Notice: The following command assumes you have postgre, npm correctly installed. also you are running on unix

Ask chat gpt if you encounter some sort of error just copy paste the error message and try to follow their soluation

1. Clone the repo
    ```
   git clone <"link to repo">
   ```
2. Configure frontend
   1. Install frontend packagesd
   ```
   npm install
   ```
   2. Test frontend installation
   ```
   npx expo start
   ```
3. Configure db
   1. Edit db config
      1. Open backend/backend/settings.py
      2. Edit the following line like this
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
    2. Create DB
        1. Go to a local direcotry (where you want to store db)
        ```
        initdb .
        ```
        2. Configure postgre

        Open postgresql.conf
        find 
        ```
        port = 5432
        ```
        change it to 
        ```
        port = 6969 #LOL
        ```
        3. Set up db 
        ```
        createuser -s postgres
        psql -U postgres
        CREATE USER user1 WITH PASSWORD 'db_pass';
        CREATE DATABASE db1 OWNER user1;
        GRANT ALL PRIVILEGES ON DATABASE db1 TO user1;
        \q
        ```
        4. start db
        ```
        pg_ctl -D . start
        ```
4. Start backend server
    ```
    python3 manage.py runserver
    ```
    notice: if the network doesn't connect on the front end, it's possible that this is due to running the app on your iphone which failed to connect with the computer. In this case, try run the app on the XCode Simulator instead