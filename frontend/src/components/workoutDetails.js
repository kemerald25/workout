import { useWorkoutsContext } from '../hooks/useworkoutsContext'
const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext()
    const handleClick = async () => {
        const response = await fetch ('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        alert('Workout deleted')

        if (response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }
    return (
        <div className="workout-details" >
            <h4>{workout.title}</h4>
            <p><strong>Load (Kg):</strong> {workout.load} </p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default WorkoutDetails