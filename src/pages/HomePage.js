import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import Tools from '../components/Tools';



function HomePage() {
  console.log("Render home");

  const [list, setList] = useState([]);


  useEffect(() => {
    // Fetch data from the JSON file when the component mounts
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setList(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  

  function onListChange(evt) {
    const value = evt.target.value;

    const newList = list.filter((item) => {
      if (value === "all") {
        return true;
      }
      if (value === "active") {
        return item.isActive === true;
      }
      if (value === "non-active") {
        return item.isActive === false;
      }
      return false;
    });

    setList(newList);
  }
  function onDelete(id) {
    const updatedList = list.filter(item => item.id !== id);
    setList(updatedList); 
  }

  return (
    <div>
      <input type='checkbox'></input>show Label
    <Tools onAction={onListChange}>
      <div className='app-list'>
        {list.map((obj) => (
          <div key={obj.id} className="list-item">
            <ListItem title={obj.title} descr={obj.descr} isActive={obj.isActive} />
            <button onClick={() => onDelete(obj.id)}>Delete</button>
          </div>
        ))}
      </div>
    </Tools>
    </div>
  );
}

export default HomePage;
