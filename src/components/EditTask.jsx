/* This is the EditTask component. It has two functions to handle saving the    edited task and changing the edited task title/content. It also has a form with an input field and a button to save the edited task. 
- The handleSaveEditedTask function saves the edited task.
- The handleOnChangeEditedTaskTitle function changes the edited task title/content.
- editedTaskTitle is the title/content of the task being edited.
*/

import React, { useEffect, useRef } from 'react'

const EditTask = ({ handleSaveEditedTask, editedTaskTitle, handleOnChangeEditedTaskTitle}) => {

  const inputRef = useRef(null);

  // Set the default cursor position to the end of the input field when user edits a task
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); 
      inputRef.current.selectionEnd = editedTaskTitle.length;
    }
  }, []);

  return (
    <form className="flex items-center justify-between px-3 py-2 rounded bg-gray-400">
      {/* Input field to edit the task */}
      <input
        className="w-full border rounded px-2 py-1 mr-2"
        type="text"
        value={editedTaskTitle}
        onChange={handleOnChangeEditedTaskTitle}
        ref={inputRef}
      />
      {/* Save the edited task button */}
      <button type="submit" className="bg-gray-500 text-white px-2 py-1 rounded" onClick={handleSaveEditedTask}>
        Save
      </button>
    </form>
  )
}

export default EditTask