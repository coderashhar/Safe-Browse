# SafeBrowse Chrome Extension

SafeBrowse is a Chrome extension designed to protect users from phishing websites by analyzing URLs in real-time using a machine learning model.

---

## Features
- **Phishing Detection:** Automatically checks if a site is phishing or safe.
- **Whitelist:** Allows users to whitelist trusted websites.
- **Logs:** Keeps track of all blocked websites for future reference.

---

## Tech Stack
- **Frontend:** Chrome Extension (JavaScript, HTML, CSS)
- **Backend:** Python Flask
- **Machine Learning:** Pre-trained RandomForestClassifier model (`model.pkl`)
- **Deployment:** Can be deployed locally or hosted on a server (e.g., Vercel, AWS, etc.).

---

## Installation and Setup

### Prerequisites
1. Python 3.7 or higher installed.
2. Flask and Flask-CORS Python libraries installed.
3. Chrome browser installed.

---

### Backend Setup

0. **Pickle file:**
    Generate a model.pkl file and paste it in the folder

1. **Clone the repository:**
   ```bash
   git clone https://github.com/coderashhar/Safe-Browse.git
   cd SafeBrowse

2. **Install dependencies:**
    ```bash
    pip install flask flask-cors numpy

3. **Run the backend server:**
    ```bash
    python model_server.py

### Frontend (Chrome Extension) Setup
1.	**Load the Chrome extension:**
	•	Open Chrome and go to chrome://extensions/.
	•	Enable Developer Mode in the top-right corner.
	•	Click Load Unpacked and select the extension folder in the repository.
2.	**Enable the SafeBrowse extension:**
	•	Once loaded, the extension will appear in the Chrome toolbar.
