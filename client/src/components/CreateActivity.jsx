import {useState, useEffect} from "react";
import { Link, useHistory }  from "react-router-dom";
import {postActiviy} from "../store/actions"
import { useDispatch, useSelector } from "react-redux"

export default function CreateActivity() {
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)

    const [activityInput, setActivityInput] = useState({
        name: "", 
        difficulty: "", 
        duration: "", 
        season: "", 
        country: [] 
    })
}