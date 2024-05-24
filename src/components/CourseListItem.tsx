import { useState } from "react";

interface CourseListItem {
  course: any;
}

export default function CourseListItem(props: CourseListItem){
  const {course} = props;
  const [collapsed, setCollapsed] = useState<boolean>(true)
  return (
    <li key={course.id} className="mb-4 p-4 border rounded shadow">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold">{course.fullname}</h2>
      {course.summary ? (
        <button 
          className="px-2 py-1 text-sm bg-blue-500 text-white rounded h-10 ml-1"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? 'Expandir' : 'Fechar'}
        </button>
        ): (null)
        
      }

    </div>
    {collapsed ? null : (
      <>
        <hr  className="mt-1"/>
        <div className="mt-1 p-1" dangerouslySetInnerHTML={{ __html: course.summary }}/>
      </>
    )}
  </li>
  )
}