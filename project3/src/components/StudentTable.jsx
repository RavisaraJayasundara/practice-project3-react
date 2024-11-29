import {students} from '../data/StudentsDb';
import {useState} from 'react';
import '../assets/css/compo.css';
import StudentProfile from './StudentProfile';


export default function StudentTable(){
    const [studentID,setStudentID]=useState();

    return(
        <div >
            <table border={1} className='leftDiv' >
            <thead>
                 <tr>
                   <th>First name</th>
                   <th>Last name</th>
                   <th>Course</th>
                   <th>Country</th>
                   <th>Profile</th>
                 </tr>
               </thead>
               <tbody>
                   {students.map((student)=>(
                     <tr>
                         <td>{student.firstName}</td>
                         <td>{student.lastName}</td>
                         <td>{student.course}</td>
                         <td>{student.address.country}</td>
                         <td><button onClick={()=> setStudentID(student)}>View</button></td>
                     </tr>
                   ))}
               </tbody>
            </table>
        {studentID && <StudentProfile props={studentID}/>}
        </div>
    )
}