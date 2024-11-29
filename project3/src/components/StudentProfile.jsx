import React from 'react';
import '../assets/css/compo.css';

export default function StudentProfile({props}) {
  return (
    <div className='rightDiv'>
        <table border={1}>
            <tr>
                <td rowSpan={7}>
                    <img className='profile' src={require('../assets/profilepic/'+props.profilePic)} alt="Profile"/>
                </td>
                <td>ID: {props.studentId}</td>
            </tr>
            <tr>
                <td>Full Name: {props.firstName} {props.firstName}</td>
            </tr>
            <tr>
                <td>Age: {props.age}</td>
            </tr>
            <tr>
                <td>Course: {props.course}</td>
            </tr>
            <tr>
                <td>Gender: {props.gender}</td>
            </tr>
            <tr>
                <td>Country: {props.address.country}</td>
            </tr>
            <tr>
                <td>Skills: {props.skills.join(", ")}</td>
            </tr>
        </table>
    </div>
  );
}