import React, { useState } from 'react';

function CreateProject() {
  const [projectTheme, setProjectTheme] = useState('');
  const [reason, setReason] = useState('');
  const [type, setType] = useState('internal');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('high');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [division, setDivision] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the data to a server using a fetch request
    console.log('Project data:', {
      projectTheme,
      reason,
      type,
      category,
      priority,
      startDate,
      endDate,
      division,
      department,
      location,
    });
  };

  return (
    <div className="container">
      <h1>Create Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectTheme">Enter Project Theme:</label>
          <input
            type="text"
            id="projectTheme"
            name="projectTheme"
            placeholder="Enter project theme"
            value={projectTheme}
            onChange={(e) => setProjectTheme(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason:</label>
          <input
            type="text"
            id="reason"
            name="reason"
            placeholder="Reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="internal">Internal</option>
            <option value="external">External</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date as per Project Plan:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date as per Project Plan:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="division">Division:</label>
          <input
            type="text"
            id="division"
            name="division"
            placeholder="Division"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button type="submit">Save Project</button>
      </form>
      <div className="status">
        <p>Status: Registered</p>
      </div>
    </div>
  );
}

export default CreateProject;


// The above code is for creating a project form.  

// Below code is for integrating full calendar. 
// Make sure you have the FullCalendar library included in your project.
// You can download it from https://fullcalendar.io/docs/

// Initialize FullCalendar
$('#calendar').fullCalendar({
  // Calendar configuration options go here
});

// Handle date selection
$('#calendar').on('click', '.fc-day', function(event) {
  // Get selected date
  var selectedDate = $(this).data('date');

  // Display the date or use it in your project's logic
  console.log("Selected Date:", selectedDate);
});