import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProjectItem, getAllProjects } from '../../modules/ProjectManager';
import './ProjectItemForm.css'

export const ProjectItemForm = ({projectId, setShowForm}) => {

	const [projectItems, setProjectItems] = useState({
		progress: "",
		dateTime: "",
    projectId: 0,
	});

	const [isLoading, setIsLoading] = useState(false);

	const [projects, setProjects] = useState([]);

	const navigate = useNavigate();


	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newProjectItem = { ...projectItems }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* ProjectItem is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newProjectItem[event.target.id] = selectedVal
		// update state
		setProjectItems(newProjectItem)
	}

useEffect(() => {
	getAllProjects().then
	(setProjects)	
}, []);

const handleClickSaveProjectItem = (event) => {
	event.preventDefault() //Prevents the browser from submitting the form

	const user = JSON.parse(sessionStorage.getItem("project_user"))

	const newProjectItem = { ...projectItems }
	newProjectItem.userId = user.id
	newProjectItem.projectId = projectId
	newProjectItem.dateTime = new Date().toLocaleString();
	addProjectItem(newProjectItem)
	.then(() => {
		setShowForm(false)
	}) 
}


	return (
		<form className="project__item">
			<div className="new-progress">
				<h2 className="project__item__title">New Progress</h2>
			</div>
			<fieldset>
				<div className="form-group">
					<label htmlFor="progress">Progress: </label>
					<input type="text" id="progress" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter progress here..." value={projectItems.progress} />
				</div>
			</fieldset>
			<div className='save-progress'>
				<button className="btn btn-primary"
					onClick={handleClickSaveProjectItem}>
					Save Progress
				</button>
			</div>
		</form>
	)
};