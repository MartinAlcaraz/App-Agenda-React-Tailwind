
import Title from './components/Title.jsx';
import TaskList from './components/TaskList.jsx';
import TaskForm from './components/TaskForm.jsx';

function App() {

	return (		
		<div className='bg-gradient-to-br from-cyan-700 to-cyan-500 h-screen'>
			<Title/>
			<TaskForm />
			<TaskList />
		</div>
	)
}

export default App;
