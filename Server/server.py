import numpy as np
from sklearn.preprocessing import StandardScaler
from flask import Flask, request, jsonify
import pickle
app = Flask(__name__)
scaler=pickle.load(open('scaler2.pkl','rb'))
model = pickle.load(open('ranForest.pkl','rb'))
@app.route('/api',methods=['POST'])
def predict():
    data = request.get_json(force=True)
    param1=float(data['param1'])
    param2=float(data['param2'])
    param3=float(data['param3'])
    param4=float(data['param4'])
    param5=float(data['param5'])
    x=np.array([param1,param2,param3,param4,param5])
    x_scaled=scaler.transform([x])
    prediction = model.predict(x_scaled)
    output = prediction[0]
    print(prediction)
    return jsonify({"ok":"true","output":output})
if __name__ == '__main__':
    app.run(port=5000, debug=True)