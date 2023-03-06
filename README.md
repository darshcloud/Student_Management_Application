# Student Management Application

A Simple Student Management Application with CRUD Functionalities.

## Tech Stack
Frontend : React <br/>
Backend : Django Rest Framework


## Requirements
Make sure you have python and Node js installed on your system
- [Python version 3.9.13](https://www.python.org/downloads/release/python-3913/) 
- [Node version 16.7.1](https://nodejs.org/en/download/)


## Project Setup

- Clone the repository in a local folder
    ```sh
    git clone https://github.com/darshcloud/Student_Management_Application.git 
    ```
- Open terminal and verify the python version installed
  ```sh
    python --version
    ```
- Verify if the node and npm are installed
  ```sh
    node --version
    npm -version
    ```
## Steps to Run Backend locally
- Navigate to cloned project directory
  ```sh
    cd Student_Management_Application/backend
    ```
- Create a python virtual environment for backend
  ```sh
    python3 -m venv myvenv
    ```
- Activate the virtual environment
  ```sh
  # For windows
    myvenv\Scripts\activate
  # For linux
    source myvenv/bin/activate
    ```
- Install python libraries using the below command
  ```sh
   cd backend
   pip install -r requirements.txt
    ```
- Start the backend Django server
  ```sh
   python manage.py runserver
    ```
- Django backend server will start on http://127.0.0.1:8000/

## Steps to Run Frontend locally
- Open a new terminal and navigate to the frontend directory
  ```sh
   cd Student_Management_Application/frontend
    ```
- Install frontend libraries using npm
  ```sh
   npm install
    ```
- Start the Node server using the below command
  ```sh
   npm start
    ```
- Once the node is started application is accessible on http://localhost:3000/
