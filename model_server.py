import pickle
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the model
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    url = data.get("url")
    features = extract_features_from_url(url)
    prediction = model.predict([features])
    result = "phishing" if prediction[0] == 1 else "safe"
    return jsonify({"url": url, "result": result})

def extract_features_from_url(url):
    # Dummy feature extraction example (replace with actual logic)
    return [len(url), url.count("."), url.count("/")]

if __name__ == "__main__":
    app.run(debug=True)