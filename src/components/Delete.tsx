import Ruoter from '../router'
import { Link, useParams } from 'react-router-dom';
import React, { createContext, useEffect, useState } from 'react';

function Delete() {
    const { id } = useParams(); 
  
    async function deleteData() {
      try {
        const response = await fetch(`http://localhost:3000/api/trips/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
  
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

