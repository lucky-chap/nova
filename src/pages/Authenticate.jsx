import React from 'react';
import { AiOutlineGoogle } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'

import kanbanImage from '../assets/kanban.svg'

export default function Authenticate({ loginWithGoogle, signInAnon }) {
	return (
		<>
			<section class='px-4 py-24 mx-auto max-w-7xl'>
				<div class='w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center'>
					<h1 class='mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight'>
						Nova 🚀 <br />
						<span class='block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline'>
							Create fast and efficient kanban boards, easily
						</span>{' '}
					</h1>
					<p class='px-0 mb-6 text-lg text-gray-500 md:text-xl lg:px-24'>
						<span className='font-bold'>Nova</span> is a free and powerful, yet
						simplified Kanban scheduler with superpwers for everyone. 🚀🔥 Get
						more done in less time ⏱️
					</p>
					<div class='mb-4 space-x-0 md:space-x-2 md:mb-8'>
						<button onClick={loginWithGoogle} class='inline-flex justify-evenly items-center w-36 p-3 rounded-md mb-2 btn btn-primary btn-lg  sm:mb-0 mr-2 transition-colors duration-200 transform bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-white uppercase font-semibold'>
							<AiOutlineGoogle /> Google
						</button>
						<button onClick={signInAnon} class='inline-flex items-center w-36 p-3 rounded-md justify-evenly mb-2 btn btn-primary btn-lg  sm:mb-0 mr-2 transition-colors duration-200 transform bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-white uppercase font-semibold'>
							<FiUser /> Guest
						</button>
					</div>
					<p className='text-gray-500  font-medium'>
						{' '}
						<sup>*</sup>Data for guest users will be cleared after log out
					</p>
				</div>
				<div class='w-full mx-auto mt-20 text-center md:w-10/12'>
					<img
						src={kanbanImage}
						alt='kanban-board'
						class='w-full rounded-lg shadow-xl'
					/>
				</div>
			</section>
		</>
	)
}
