import Ruoter from '../router'
import { Link, useParams } from 'react-router-dom';
import React, { createContext, useEffect, useState } from 'react';
import Create from './Create';
import Trip from './trip';

interface UserData {
    id: string;
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    image: string;
}
async function fetchData(url: string) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const user = await response.json()
        return user;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}


function Delete() {
    const { id } = useParams(); // נקבל את ה-ID מפרמטרי ה-URL שנקבעו ב-React Router
  
    async function deleteData() {
      try {
        const response = await fetch(`http://localhost:3000/api/trips/${id}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        // ניתן להוסיף טיפול נוסף כגון עדכון המצב אחרי מחיקה
        // לדוגמה, ניתן לנווט לדף אחר או לרענן את הרשימה של הנתונים
  
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    }
  
    useEffect(() => {
      deleteData();
    }, [id]); // כאשר ה-ID משתנה, נבצע את המחיקה
  
    return (
      <div>מחיקה הושלמה</div>
    );
  }
  
  export default Delete;

