**Clone the repository**
```
git clone https://github.com/NeuroNodee/T-R-E-K-K-A
```

**Navigate to the project directory**
```
cd backend
```

**Create a virtual environment**
    ```
python -m venv venv
```

**Activate the virtual environment**
```
source venv/bin/activate  # On Linux/Mac
venv\Scripts\activate    # On Windows
```

**Install dependencies**
    ```
pip install -r requirements.txt
```

**Run migrations**
```    
python manage.py migrate
```

**Load initial data**
```
python manage.py loaddata initial_travelkit_data.json
```

**Run the development server**
```
python manage.py runserver
```

***There are many api kleys needed for this project which can be added in the .env file(Can get api keys from the respective websites /colaborators)***