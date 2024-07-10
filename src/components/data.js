import { useEffect, useState } from "react";

// import { db, collection, addDoc, deleteDoc, doc, onSnapshot } from "../firebase.js";
import { database, ref, onValue, set, push, remove } from "../firebase"; // Adjust the path as needed



const Data = () => {
  const [studentList, setStudentList] = useState([]);
  const [newStudentName, setNewStudentName] = useState("");


//React
  //   const handleNewStudent = () => {
  //     if (newStudentName.trim()) {
  //         database.
  //       setStudentList([...studentList, newStudentName.trim()]);
  //       setNewStudentName("");
  //     }
  //   };

  //   const handleDeleteStudent = (index) => {
  //     const updatedList = studentList.filter((_, i) => i !== index);
  //     setStudentList(updatedList);
  //   };


// Using firebase real time database
  useEffect(() => {
    const studentRef = ref(database, "students");
    onValue(studentRef, (snapshot) => {
      const data = snapshot.val();
      const students = data ? Object.values(data) : [];
      setStudentList(students);
    });
  }, []);

  const handleNewStudent = () => {
    if (newStudentName.trim()) {
      const studentRef = ref(database, "students");
      const newStudentRef = push(studentRef);
      set(newStudentRef, newStudentName.trim());
      setNewStudentName("");
    }
  };

  const handleDeleteStudent = (student) => {
    const studentRef = ref(database, "students");
    const query = ref(database, `students/${student.id}`);
    remove(query);
  };

//Using firestore snapshot
// useEffect(() => {
//     const studentCollection = collection(db, "students");
    
//     const unsubscribe = onSnapshot(studentCollection, (snapshot) => {
//       const students = snapshot.docs.map((doc) => ({ id: doc.id, name: doc.data().name }));
//       setStudentList(students);
//     });

//     // Cleanup the subscription on unmount
//     return () => unsubscribe();
//   }, []);

//   const handleNewStudent = async () => {
//     if (newStudentName.trim()) {
//       const studentCollection = collection(db, "students");
//       await addDoc(studentCollection, { name: newStudentName.trim() });
//       setNewStudentName("");
//     }
//   };

//   const handleDeleteStudent = async (studentId) => {
//     const studentDoc = doc(db, "students", studentId);
//     await deleteDoc(studentDoc);

//   };
// async function addStudents() {
//   const students = [
//     { name: 'John Doe', age: 20, major: 'Computer Science' },
//     { name: 'Jane Smith', age: 22, major: 'Mathematics' },
//     { name: 'Alice Johnson', age: 21, major: 'Physics' },
//     { name: 'Bob Brown', age: 23, major: 'Chemistry' },
//     { name: 'Charlie Davis', age: 24, major: 'Biology' }
//   ];

//   const studentsCollection = collection(db, 'test');

//   for (const student of students) {
//     try {
//       await addDoc(studentsCollection, student);
//       console.log(`Added student: ${student.name}`);
//     } catch (e) {
//       console.error('Error adding student: ', e);
//     }
//   }
// }

// addStudents();

  return (
    <div>
      <input
        type="text"
        value={newStudentName}
        placeholder="Enter names"
        onChange={(e) => setNewStudentName(e.target.value)}
      />
      <button onClick={handleNewStudent}>Add</button>

      <ol>
        {studentList.map((student, index) => (
          <li key={index}>
            I am {student}.
            <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Data;
