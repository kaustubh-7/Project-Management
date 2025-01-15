import ProjectSideBar from './components/ProjectSideBar.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import NewProject from './components/NewProject.jsx';
import { useState } from 'react';
import SelectedProject from './components/SelectedProject.jsx';

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    project: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text:text,
        id: taskId,
        projectId: prevState.selectedProject
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }

  function handleDeleteTask(id){
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task)=> { return task.id !== id })
      }
    })
  }

  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: id,
      }
    })
  }

  function handleNewProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: null
      }
    })
  }

  function handleSaveNewProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random()
    }

    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined,
        project: [...prevState.project, newProject]
      }
    })
  }


  function handleCancelBtn() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined
      }
    });
  }

  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProject: undefined,
        project: prevState.project.filter((oneProject) => { return (oneProject.id !== prevState.selectedProject) })
      }
    });
  }
  let selectProject = projectsState.project.find(project => project.id === projectsState.selectedProject);
  let content = <SelectedProject
    project={selectProject}
    onDelete={handleDeleteProject}
    onAddTask={handleAddTask} 
    onDeleteTask={handleDeleteTask}
    tasks={projectsState.tasks}
    />;

  if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onBtnClick={handleNewProject} />;
  }
  else if (projectsState.selectedProject === null) {
    content = <NewProject
      onAdd={handleSaveNewProject}
      onCancel={handleCancelBtn} />;
  }

  return <main className='h-screen my-8 flex gap-8'>
    <ProjectSideBar
      onBtnClick={handleNewProject}
      projects={projectsState.project}
      onSelectProject={handleSelectProject}
      selectedProjectId={projectsState.selectedProject}
    />
    {content}
  </main>

}

export default App;
