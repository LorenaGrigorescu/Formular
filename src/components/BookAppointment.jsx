import { useRef, useState, useEffect } from "react";
import axios from '../api/axios';
import { Link } from 'react-router-dom';
const PROFILE_URL = '/api/users/profile';
const ACTIVITIES_URL = "/api/activities";
const USERS_URL = "/api/users";
const CHILDREN_URL = "/api/children";
const BookAppointment = () =>
{
   const [date, setDate] = useState('');
   const [duration, setDuration] = useState('0');
   const [description, setDescription] = useState('');
   const [copyChildrenName, setCopyChildrenName] = useState([]);
   const [currentChild, setCurrentChild]=useState('');
   const [userData, setUserData] = useState('');
   const [validDate, setValidDate] = useState("valid");
   const [validDuration, setValidDuration] = useState("valid")
   const [validDescription, setValidDescription]=useState("valid");
   const [validChildName, setValidChildName]=useState("valid");
   const [childName, setChildName]=useState('');
   const [validationFlag, setValidationFlag] = useState(true);
   const [flag, setFlag] = useState(false);

   var childrenName ;
   const username = "__loraa__";

   useEffect(()=>{
    getUserData(username);
    getChildren();
}, []);
 function validateActivityDate(date)
{
    const isNotEmpty = date.length>0;
    
    setValidDate(isNotEmpty ? 'valid' : 'notValid');
    return isNotEmpty;
}
function validateDuration(duration)
{
    const isNotEmpty = 1<=duration && duration<=10;
    setValidDuration(isNotEmpty ? 'valid': 'notValid')
    return isNotEmpty;
}
function validateDescription(description)
{
    const isNotEmpty = description.length>0;
    setValidDescription(isNotEmpty ? 'valid' : 'notValid');
    return isNotEmpty;
}
function validateChildName(childName)
{
    const isNotEmpty = childName.length>0;
    setValidChildName(isNotEmpty ? 'valid' : 'notValid');
    return isNotEmpty;
    
}
async function  getUserData(username) {
try{ 
    const response = await axios.get(USERS_URL + '/' +  username,
    {
        headers: { 'Content-Type': 'application/json' }
    }
    );
     setUserData(response.data);
}catch(err)
    {
        console.log(err);
    }
}
async function  getChildren()
{
    try{
        const response = await axios.get(CHILDREN_URL, 
            {
                headers: { 'Content-Type': 'application/json' }
            })
            console.log(response.data);
            childrenName = response.data;
            setCopyChildrenName(childrenName);

    }catch(err)
    {
        console.log(err);
    }
}

const handleSubmit= async() => {
    var vDate = validateActivityDate(date);
    var vDuration = validateDuration(duration);
    var vDescription = validateDescription(description);
    var vChildName = validateChildName(childName);
    const flag = vDate && vDuration && vDescription && vChildName;
    setValidationFlag(flag);
    if(flag){ 
        console.log("aici");
        try{
            const response = await axios.post(ACTIVITIES_URL, 
                JSON.stringify({ "adultName": userData.username, "childName": currentChild, 
                "activityDate": date, "duration":duration, "description": description}),
                {
                    headers: { 'Content-Type': 'application/json' }
                    
                });
            setFlag(true);
            setTimeout(() => setFlag(false), 3000)
        }catch(err)
        {
            console.log(err);
        }
    }
}
return (
    <div id="mainDiv" className="text-info bg-dark">
    <h1>Book appointment</h1>
    <form>
        <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">Activity date:</span>
            <input className={`form-control ${validDate}`}
            aria-label="date"
            aria-describedby="addon-wrapping"
            type="text"
            id="date"
            onChange={(e)=>
                {
                    setValidationFlag(true);
                    setDate(e.target.value)
                }}
            value={date}
            placeholder="YYYY-MM-DD"
            required
            />
        </div>
        <div className="input-group flex-nowrap">
        <span htmlFor="duration">Duration: </span>
        <select 
            id="duration" 
            onChange={(e)=>{
            setDuration(e.target.value);
            setValidationFlag(true);
            }} 
            className={`form-control ${validDuration}`}
            aria-label="duration"
            aria-describedby="addon-wrapping"
            >
            <option selected style={{display:"none"}}>Choose how much time you want to spend :</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
        </select>
            </div>
        <div className="input-group flex-nowrap">
            <span  htmlFor="description">Description: </span>
        <input 
            type="text"
            id="description"
            aria-label="description"
            aria-describedby="addon-wrapping"
            onChange={(e)=>{
                setDescription(e.target.value);
                setValidationFlag(true);

            }}
            className={`form-control ${validDescription}`}
            value = {description}
            required
            />
            </div>
        <div className="input-group flex-nowrap">
            <span>Child:</span>
            <select 
                    onChange={(e)=>{
                        setValidationFlag(true);
                    setCurrentChild(e.target.value)
                    setChildName(e.target.value)}}
                    aria-label="description"
                    aria-describedby="addon-wrapping"
                    className={`form-select ${validChildName}`}>
                <option style={{display:"none"}}>Choose a child:</option>
                {
                    copyChildrenName.map(child => (<option key={child.id[0]}>{child.name}</option>))
                }
                 </select>
        </div>
            {
                !validationFlag && (
                    <div className="error input-group flex-nowrap alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Invalid data! </strong> You should check in on some of those fields below.
                    </div>
                )
            }
            {
                flag && (
                    <div className="ok input-group flex-nowrap alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Appointment booked! </strong>
                    </div>
                ) 
            }
            <button onClick={(e)=>{
                e.preventDefault();
                handleSubmit()}}
            >Book appointment</button>
    </form>
    </div>
)
}
export default BookAppointment