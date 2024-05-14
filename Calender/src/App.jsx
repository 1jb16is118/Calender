import { useState,useEffect } from 'react'
import './App.css'


function App() {
  var currentDate = new Date();
  let formattedDate = currentDate.getFullYear() + '-' + ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-' + ('0' + currentDate.getDate()).slice(-2);

  const [startDate,setStartDate] = useState(formattedDate)
  const [endDate,setEndDate] = useState(formattedDate)
  const [allDay,setAllDay] = useState(false)
  
  
  const handleStartDate = (event) => {
    setStartDate(event.target.value);
  };
  const handleEndDate = (event) => {
    setEndDate(event.target.value);
  };
  const handleAllDay = (event) =>{

    let bool = event.target.checked 
    
      document.getElementById("startTime").disabled = bool
      document.getElementById("endTime").disabled = bool
      setAllDay(bool)

  }
  const closeModel = () =>{
   
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }
  const showModel = () =>{
    
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
  };
  
  
       
    let arr_AM = []
    let arr_PM = []
    let start = 0
    while(start<12){

      let hr = start<10 ? "0"+start : start
      arr_AM.push(`${hr}:00 AM`,`${hr}:30 AM`)
      arr_PM.push(`${hr}:00 AM`,`${hr}:30 AM`)
      start +=1
    }
    
 

window.onclick = function(event) {
  var modal = document.getElementById('myModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const handleSubmit = () =>{
  let object = {}
  let startTime = document.getElementById("startTime").value
  let endTime = document.getElementById("endTime").value
  let summary = document.getElementById("summary").value
  let description = document.getElementById("description").value

  object = {startTime,endTime,summary,description,allDay,startDate,endDate}
  console.log(object)
}

  return (
    <>
    <div className='availability'>
  <button id="openModalBtn"  onClick={showModel}>Availability Calender</button>
  </div>
  <div id="myModal" className="modal">
    
    <div className="modal-content">
      <span className="close" onClick={closeModel}>×</span>
      <h2>Event Details</h2>
      <form id="modalForm" onSubmit ={(e) => e.preventDefault()}>
        <label htmlFor="startDate">Start Date:</label>
        <div className="form-input">
          
          <input type="date" id="startDate" value={startDate} onChange={handleStartDate} />
          <div>at</div>
          <select id="startTime">
        {[...arr_AM,...arr_PM].map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    
        </div>
        <label htmlFor="endDate">End Date:</label>
        <div className="form-input">
        <input type="date" id="endDate" value={endDate} onChange={handleEndDate} />
          <div>at</div>
          <select id="endTime">
        {[...arr_AM,...arr_PM].map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
        </div>
        <label htmlFor="summary">Summary:</label>
        <input type="text" id="summary" name="summary" />
        <div className="checkbox-container">
          <input type="checkbox" id="allDay" name="allDay" onChange={handleAllDay} />
          <label htmlFor="allDay">All Day</label>
        </div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows={3}
          defaultValue={""}
        />
        <button type="submit"  onClick = {handleSubmit}>Submit</button>
      </form>
    </div>
  </div>
</>

  )
}

export default App
