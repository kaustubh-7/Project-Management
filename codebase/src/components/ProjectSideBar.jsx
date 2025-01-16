import Button from './Button.jsx';
export default function ProjectSideBar({ 
    onBtnClick, 
    projects, 
    onSelectProject, 
    selectedProjectId
}) {
    /*The <aside> element in HTML is used to show content that is related to the main content, 
    but not the main focus. Think of it like a sidebar or extra information box. */
    return <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
        <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Project</h2>
        <div >
            <Button onClick={onBtnClick}>+ Add project</Button>
        </div>
        <ul className='mt-8' >
            {projects.map(project => {
                let cssClass = 'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 ';

                if (project.id === selectedProjectId){
                    cssClass += 'bg-stone-800 text-stone-200';
                }
                else{
                    cssClass += 'text-stone-400';
                }
                return (
                    <li key={project.id}>
                    <button
                        className={cssClass}
                        onClick={()=>onSelectProject(project.id)}>
                        {project.title}
                    </button>
                </li>
                );
            }
               )
            }
        </ul>
    </aside>
}