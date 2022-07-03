import './App.css';
import EmailHeader from './email_header.js';
import Mail from './mail.js';
import {FaAngleDown} from "react-icons/fa";
import {useState} from 'react';
import dummies from './dummies.json';


//Author: Joan Kirby C. Wenceslao

function App() {
  
  //state variables use for updating the rendered ui
  //of the application
  let [dummyEmails, setDummies] = useState(dummies);
  let [emailCount, setEmailCount] = useState(Object.keys(dummyEmails).length); 
  let [toRemoveList, setToRemoveList] = useState([]);


  //function that adds the "classname" of a checkbox that is checked
  //to the list of mails to be removed
  const handleCheck = (event) => {
    var updatedList = toRemoveList;
    if (event.target.checked) {
      updatedList = [...toRemoveList, event.target.className];
    } else {
      updatedList.splice(toRemoveList.indexOf(event.target.className), 1);
    }
    setToRemoveList(updatedList);
  };

  //function to delete all of the mails with the indices stored from
  //the toRemoveList
  const Delete = async () => {
    var updatedDummies = dummyEmails;
    toRemoveList.forEach(d => delete updatedDummies[(parseInt(d) - 1)]);
    setDummies(updatedDummies);
    setEmailCount(Object.keys(updatedDummies).length);
  }

  //return function that is the main structure of the application
  return (
    <div className="App">
      <EmailHeader deleteFunction = {Delete}/>
      <div className = "Status">
        <p className = "unr">Unread</p>
        <button  className = "SCount">
          <p>{emailCount}</p>
          <p><FaAngleDown/></p>
        </button>
      </div>
      <div className = "Emails">
        {dummyEmails.map ( de => {
          return(
            <Mail cbFunction = {handleCheck} key = {de.id} emailSet = {de}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
