import axios from "axios";
import { useEffect, useState } from "react"
import CourseListItem from "./CourseListItem";

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://trial.lmsnext.com.br/moodle/webservice/rest/server.php', {
          params: {
            wstoken: '4f7f4b97a28ded4d2427deb0622cf27d',
            wsfunction: 'core_course_get_courses',
            moodlewsrestformat: 'json'
          }
        });
        setCourses(response.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching courses:', error);
      }    
    };
    fetchCourses();
    console.log(courses)
  }, [])

  const filteredCourses = courses.filter(course =>
    course.fullname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto  w-2/3">

      <h1 className="text-2xl font-bold mb-4">Lista de Cursos</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Pesquisar curso..."
          className="border border-gray-300 rounded p-2 w-full"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <ul>
        {filteredCourses.map(course => (
         <CourseListItem course={course}/>
        ))}
      </ul>
    </div>
  );
};
