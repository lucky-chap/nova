import { db } from '../lib/firebase'
import { Routes, Route } from 'react-router-dom'
import useBoards from '../hooks/useBoards'

import loader from '../assets/loader.gif'

import Dashboard from '../components/Dashboard'

import Kanban from './Kanban'

import { v4 as uuidv4 } from 'uuid'

const Home = ({ logOut, userId, loginWithGoogle, name, isAnon }) => {
	const boards = useBoards(userId)

	const addNewBoard = e => {
		e.preventDefault()
		const uid = uuidv4()

		db.collection(`users/${userId}/boards`)
			.doc(uid)
			.set({ name: e.target.elements.boardName.value })

		const columnOrder = { id: 'columnOrder', order: [] }

		db.collection(`users/${userId}/boards/${uid}/columns`)
			.doc('columnOrder')
			.set(columnOrder)

		e.target.elements.boardName.value = ''
	}

	const deleteBoard = id => {
		db.collection(`users/${userId}/boards`).doc(id).delete()
	}

	return boards !== null ? (
		<Routes>
			<Route
				path='/'
				element={
					<Dashboard
						deleteBoard={deleteBoard}
						logOut={logOut}
						boards={boards}
						addNewBoard={addNewBoard}
						name={name}
					/>
				}
			/>

			<Route path='/board/:boardId' element={<Kanban userId={userId} />} />
		</Routes>
	) : (
		<div className='h-screen w-screen grid place-content-center'>
			<img
				src={loader}
				alt='loader'
			/>
		</div>
	)
}

export default Home
