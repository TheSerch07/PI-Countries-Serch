import {useState} from "react";
import { Link, useNavigate }  from "react-router-dom";
import {postActiviy} from "../store/actions"
import { useDispatch, useSelector } from "react-redux"

export default function CreateActivity() {
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)
    const history = useNavigate()

    const [activityInput, setActivityInput] = useState({
        name: "", 
        difficulty: "", 
        duration: "", 
        season: "", 
        country: [] 
    })

    console.log(activityInput)

    function handleChange(e) {
        setActivityInput({
            ...activityInput,
            [e.target.name] : e.target.value
        })
    }

    function handleCheck(e) {
        if (e.target.checked) {
            setActivityInput({
                ...activityInput,
                season: e.target.value
            })
        }
    }

    function handleSelect(e) {
        setActivityInput({
            ...activityInput,
            country: [...activityInput.country, e.target.value]
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(postActiviy(activityInput))
        alert("Activity Created!")
        setActivityInput({
            name: "", 
            difficulty: "", 
            duration: "", 
            season: "", 
            country: [] 
        })
        history("/home")
    }
    
    return (<div>
        <Link to="/home">
            <button>Back to Home!</button>
        </Link>
        <h1>Create An Activity!</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={activityInput.name} name="name" onChange={handleChange} />   
            </div> 
            <div>
                <label >Difficulty:</label>
                <input type="range" value={activityInput.difficulty} name="difficulty" min="1" max="5"  onChange={handleChange}/>   
            </div>
            <div>
                <label >Duration:</label>
                <input type="range" value={activityInput.duration} name="duration" min="1" max="20" onChange={handleChange}/>   
            </div>
            <div>
                <label>Season:</label>
                <label>Summer</label>
                <input type="checkbox" value="Summer" name="Summer" onChange={handleCheck} />
                <label>Winter</label>
                <input type="checkbox" value="Winter" name="Winter" onChange={handleCheck} /> 
                <label>Autumn</label>
                <input type="checkbox" value="Autumn" name="Autumn" onChange={handleCheck} /> 
                <label>Spring</label>
                <input type="checkbox" value="Spring" name="Spring" onChange={handleCheck} /> 
            </div> 
            <select onChange={handleSelect} >
                {countries.map((country) => {
                    return <option value={country.id}>{country.name}</option>
                })}
            </select>
            <div>
                {activityInput.country.map((country) => {
                    return <h6>{country}</h6>})}
            </div>
            <button type="submit" >Create!</button>
        </form>
        </div>)
}

