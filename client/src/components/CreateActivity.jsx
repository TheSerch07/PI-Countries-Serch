import {useState} from "react";
import { Link, useNavigate }  from "react-router-dom";
import {postActiviy} from "../store/actions"
import { useDispatch, useSelector } from "react-redux"

function validateInput(input) {
    let errors = {}
    if (!input.name) {
        errors.name = "This field can not be blank!"
    }
    if (!input.difficulty) {
        errors.difficulty = "This field can not be blank!"
    }
    if (!input.duration) {
        errors.duration = "This field can not be blank!"
    }
    if (!input.season) {
        errors.season = "This field can not be blank!"
    }
    if (input.country.length < 1) {
        errors.country = "This field can not be blank!"
    }
    return errors
}

export default function CreateActivity() {
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)
    const history = useNavigate()

    const [errors, setErrors] = useState({})
    const [activityInput, setActivityInput] = useState({
        name: "", 
        difficulty: "", 
        duration: "", 
        season: "", 
        country: [] 
    })

    // console.log(activityInput)
    // console.log(errors)
    // console.log( "el bueno")

    // console.log(errors.length === 0, "errros")

    function handleChange(e) {
        setActivityInput({
            ...activityInput,
            [e.target.name] : e.target.value
        })
        setErrors(validateInput({
            ...activityInput,
            [e.target.name] : e.target.value
        }))
    }

    function uncheck(){
        let checkbox1 = document.getElementById("Summer");
        let checkbox2 = document.getElementById("Winter"); 
        let checkbox3 = document.getElementById("Autumn");
        let checkbox4 = document.getElementById("Spring") 
       
        checkbox1.onclick = function() { 
            if(checkbox1.checked !== false) { 
                checkbox2.checked = null
                checkbox3.checked = null
                checkbox4.checked = null
            }
        } 
        checkbox2.onclick = function() { 
            if (checkbox2.checked !== false) { 
                checkbox1.checked = null
                checkbox3.checked = null
                checkbox4.checked = null
            }
        } 
        checkbox3.onclick = function() {
            if (checkbox3.checked !== false) { 
                checkbox1.checked = null
                checkbox2.checked = null
                checkbox4.checked = null
            }
        }
        checkbox4.onclick = function() {
            if (checkbox4.checked !== false) {
                checkbox1.checked = null
                checkbox2.checked = null
                checkbox3.checked = null
            }
        }
    }
    
    function handleCheck(e) {

        if (e.target.checked) {
            console.log(e.target)
            setActivityInput({
                ...activityInput,
                season: e.target.value
            })
            setErrors(validateInput({
                ...activityInput,
                season: e.target.value
            }))
        }
    }

    function handleSelect(e) {
        setActivityInput({
            ...activityInput,
            country: [...activityInput.country, e.target.value]
        })
        setErrors(validateInput({
            ...activityInput,
            country: [...activityInput.country, e.target.value]
        }))
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

    function filterCountry(country) {
        setActivityInput({
            ...activityInput,
            country: activityInput.country.filter(c => c !== country)
        })
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
                {errors.name && <p>{errors.name}</p> }  
            </div> 
            <div>
                <label >Difficulty:</label>
                <input type="range" value={activityInput.difficulty} name="difficulty" min="1" max="5"  onChange={handleChange}/> 
                {errors.difficulty && <p>{errors.difficulty}</p> } 
            </div>
            <div>
                <label >Duration:</label>
                <input type="range" value={activityInput.duration} name="duration" min="1" max="20" onChange={handleChange}/> 
                {errors.duration && <p>{errors.duration}</p> }   
            </div>
            <div>
                <label>Season:</label>
                <label>Summer</label>
                <input type="checkbox" id="Summer" value="Summer" name="Summer" onChange={handleCheck} onClick={uncheck} />
                <label>Winter</label>
                <input type="checkbox" id="Winter" value="Winter" name="Winter" onChange={handleCheck} onClick={uncheck} /> 
                <label>Autumn</label>
                <input type="checkbox" id="Autumn" value="Autumn" name="Autumn" onChange={handleCheck} onClick={uncheck} /> 
                <label>Spring</label>
                <input type="checkbox" id="Spring" value="Spring" name="Spring" onChange={handleCheck} onClick={uncheck} />
                {errors.season && <p>{errors.season}</p> }    
            </div> 
            <select onChange={handleSelect} >
                {countries.map((country) => {
                    return <option value={country.id}>{country.name}</option>
                })}
            </select>
            
            {errors.country && <p>{errors.country}</p> }
            {activityInput.country.map((country) => {
                    return <div><button onClick={() => filterCountry(country)}>X</button> <h6>{country}</h6></div>
                })}
            {(Object.entries(errors).length > 0) ? <button type="button" onClick={() => {alert("Complete all fields!") }} >Create!</button> : <button type="submit" >Create!</button>}
        </form>
        </div>)
}



