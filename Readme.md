# Song Popularity Prediction

## Overview

Song Popularity Prediction is a machine learning project that explores various regression algorithms, including Linear Regression, Polynomial Regression, XGBoost Regressor, and Random Forest Regressor, to predict the popularity of songs based on their features. The project demonstrates how to build and compare different regression models and connect them to a Next.js frontend using a Flask API and the pickle module for model serialization.
The different implementations of the model can be found in the jupyter notebook in the **Notebooks** folder.

## Features

- Explore Regression Algorithms: Compare the performance of different regression algorithms for song popularity prediction.

- Flask API: Connect the trained machine learning model to a Next.js frontend through a Flask API.

- Pickle Module: Serialize the trained model using pickle for efficient storage and retrieval.


## Installation and Setup

1. Clone the repository

2. Navigate to the Server folder

3. Install the required packages using pip requirements.txt

4. Run the server using `python server.py`

5. Navigate to the Client folder

6. Install the dependencies using `npm install`

7. Run `npm run dev` to start the frontend

8. Open your web browser and go to `http://localhost:3000` to access the Song 

## Technologies Used

- Next.js: A React framework for building server-side rendered applications.

- Flask: A minimal and flexible Python web application framework.

- NumPy : A fundamental package for scientific computing with Python.

- Pandas: A powerful library for data manipulation and analysis in Python.

- Scikit-learn: A machine learning library for Python.

- XGBoost: An implementation of the XGBoost algorithm for machine learning tasks.