import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProject } from '../../modules/ProjectManager';
import { getAllCategories } from '../../modules/CategoryManager';
import './ProjectForm.css'

export const ProjectForm = () => {
	// State will contain both project data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [project, setProject] = useState({
		title: "",
		description: "",
    userId: "",
		categoryId: 0
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the CategoryManager to complete this section
	const [categories, setCategories] = useState([]);

	const navigate = useNavigate();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newProject = { ...project }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newProject[event.target.id] = selectedVal
		// update state
		setProject(newProject)
	}

    useEffect(() => {
      getAllCategories().then
      (setCategories)	
    }, []);


	const handleClickSaveProject = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const user = JSON.parse(sessionStorage.getItem('project_user'))
		project.userId = user.id
		const categoryId = project.categoryId

		if (categoryId === 0 ) {
			window.alert("Please select a category")
		} else {
			//invoke addProject passing project as an argument.
			//once complete, change the url and display the project list
			addProject(project)
				.then(() => navigate("/projects"))
		}
	}

	return (
		<form className="projectForm">
			<h2 className="projectForm__title">New Project</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="title">Project title: </label>
					<input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter project title here..." value={project.title} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="description">Project description: </label>
					<input type="text" id="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter project description here..." value={project.description} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="category">Project category: </label>
					<select value={project.categoryId} name="categoryId" id="categoryId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a category...</option>
						{categories.map(c => (
							<option key={c.id} value={c.id}>
								{c.type}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveProject}>
				Save Project
          </button>
		</form>
	)
};