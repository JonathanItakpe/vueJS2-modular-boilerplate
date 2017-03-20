import { routes as moduleA } from './moduleA'
import { routes as moduleB } from './moduleB'
import Home from './Home';

// Set Up the Main Routes
const main = [
	{
		path: "",
		component: Home
	}
]
export default [ ...moduleA, ...moduleB, ...main ]