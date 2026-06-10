import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

// Initialize Firebase only if the config is updated (not the placeholder)
const isConfigured = firebaseConfig.apiKey !== "PASTE_YOUR_API_KEY_HERE";

export const app = isConfigured ? initializeApp(firebaseConfig) : null;
export const db = isConfigured ? getFirestore(app, firebaseConfig.firestoreDatabaseId) : null;

export const isFirebaseConfigured = isConfigured;
