# Chat App

This is a chat application built using React and Firebase. The app allows users to send and receive messages in real-time, including support for emojis and image uploads. The app also includes user status indicators, message timestamps, and chat history management.

## Features

- Real-time messaging
- Emoji picker
- Image upload and display
- User status indicators
- Message timestamps
- Chat history management
- User blocking functionality

## Technologies Used

- React
- Firebase Firestore
- Firebase Authentication
- CSS for styling

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up Firebase:**

   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project.
   - Add a web app to your Firebase project.
   - Copy the Firebase configuration details.

4. **Add Firebase configuration:**

   - Create a file named `firebaseConfig.js` in the `src/lib` directory.
   - Add your Firebase configuration details to this file:

```javascript
// src/lib/firebaseConfig.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

export default firebaseConfig;
```

5. **Initialize Firebase in your project:**

   - Update the `firebase.js` file to use your configuration:

```javascript
// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
```

6. **Run the application:**

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Usage

1. **Sign Up / Login:**
   - Users can sign up or log in using their email and password.
   
2. **Chat:**
   - After logging in, users can start chatting by selecting a contact or starting a new conversation.
   - Users can send text messages, emojis, and images.
   - Messages are displayed in real-time.
   
3. **User Blocking:**
   - Users can block or unblock other users to control who can send them messages.
   
4. **Status Indicators:**
   - User online/offline status is indicated in the chat.

## Project Structure

```
chat-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Chat.js
│   │   └── ...
│   ├── lib/
│   │   ├── chatStore.js
│   │   ├── firebase.js
│   │   ├── firebaseConfig.js
│   │   ├── upload.js
│   │   └── userStore.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy chatting! 😊
