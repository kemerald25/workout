import { Link } from 'react-router-dom'
// import WorkoutForm from './workoutForm'

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>

                <Link to= "/workout-form" target='blank'>
                    Create New Workout
                </Link>
            </div>
        </header>
    )
}

export default Navbar