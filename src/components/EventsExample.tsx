import React, { FC, useState } from 'react';

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const [isDrag, setIsDrag] = useState<boolean>(false)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('====>value<====', value)
  }
  
  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('====>DRAG<====')
  }
  
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
    console.log('====>DROP<====')
  }

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }
  
  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  }

  return (
    <div>
      <input value={value} onChange={changeHandler} type="text"/>

      <button onClick={clickHandler}>Button</button>

      <div
        onDrag={dragHandler}
        draggable
        style={{width: '200px', height: '200px', background: 'red'}}
      />

      <div
        onDrop={dropHandler}
        onDragLeave={dragLeaveHandler}
        onDragOver={dragOverHandler}
        style={{width: '200px', height: '200px', background: isDrag ? 'green' : 'red', marginTop: 15}}
      />
    </div>
  );
};

export default EventsExample;