import { useNavigate, useActionData } from "react-router-dom";
import { Form } from "react-router-dom";
import classes from "./EventForm.module.css";
import { json, redirect } from 'react-router-dom';

function EventForm({ method, event }) {
  const data = useActionData();
  const navigate = useNavigate();

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      <ul>
        {data &&
          data.errors &&
          Object.values(data.errors).map((err) => <li>{err}</li>)}
      </ul>

      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({request, params}){
  var data = await request.formData();
  var eventData = {
      title: data.get('title'),
      image: data.get('image'),
      date: data.get('date'),
      description: data.get('description'),
  }
  console.log("data: " + JSON.stringify(eventData));
  const method = request.method;
  let url = 'http://localhost:8080/events/';
  let eventId = params.id
  if(method === 'PATCH'){
    url = url + eventId
  }

  var response = await fetch(url, {
      method: method,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(eventData)
  })

  if (response.status == 422){
      return response;
  }

  if(!response.ok){
      throw json({messsage: 'Could not save event' , status: 500})
  }

  return redirect('/events')
}
