import React, { useState } from 'react';
import ListItem from './ListItem';
import Tools from '../components/Tools';

const arr = [
  {
    id: 1,
    title: "Appointment for October",
    descr: 'The patient is rescheduled to October',
    isActive: true
  },
  {
    id: 2,
    title: "Appointment for November",
    descr: 'The patient is rescheduled to November',
    isActive: false
  },
  {
    id: 3,
    title: "Appointment for January",
    descr: 'The patient is rescheduled to January',
    isActive: true
  }
];

function List() {
  const [list, setList] = useState(arr);

  function onListChange(evt) {
    const value = evt.target.value;

    const newList = arr.filter((item) => {
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
  );
}

export default List;
