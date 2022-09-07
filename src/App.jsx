
import Title from './components/Title.jsx';
import TaskList from './components/TaskList.jsx';
import TaskForm from './components/TaskForm.jsx';
import Footer from './components/Footer.jsx';

function App() {
	return (
		<div className='background-img bg-fixed p-2 bg-gradient-to-tr from-indigo-800 to-indigo-500  w-screen h-full min-h-screen'>
			<Title />
			<main className='mx-2 sm:grid sm:grid-cols-2 sm:gap-5'>
				<div>
					<TaskForm />
				</div>
				<TaskList />
			</main>
			<Footer/>
		</div>
	)
}

export default App;

