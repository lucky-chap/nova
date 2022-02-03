import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
	apiKey: 'AIzaSyAbAZF5ZlK6OYu3GDAkzdHLgJA5F_vfQYw',
	authDomain: 'nova-kanban-board.firebaseapp.com',
	projectId: 'nova-kanban-board',
	storageBucket: 'nova-kanban-board.appspot.com',
	messagingSenderId: '708971563941',
	appId: '1:708971563941:web:118f46ac8611cab27bb64c',
	measurementId: 'G-KP8QB9QZQD',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()


export { firebase, db }