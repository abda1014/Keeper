import React,{useState} from "react";

function CreateArea(props) {


const [note,setNote]= useState({
  title:"",
  content:""
});

  function handleChange(event) {
    const {name,value} = event.target;
    setNote(prevNote =>{
      return{
        ...prevNote,
      [name]:value
      }
    })
  }
  function submit(event){
  props.onAdd(note);
  event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
         onChange={handleChange} 
         name="title"
          placeholder="Title"
          value={note.title} 
          />
        <textarea 
        name="content" 
        placeholder="Take a note..." 
        rows="3"
        onChange={handleChange}
        value={note.content}
         />
        <button 
         onClick={submit}
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;


//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.