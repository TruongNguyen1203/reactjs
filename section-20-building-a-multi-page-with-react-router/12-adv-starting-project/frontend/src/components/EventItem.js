import classes from "./EventItem.module.css";
import { Link, useSubmit, useRouteLoaderData} from "react-router-dom";

function EventItem({ event }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure to delete this event ?");
    if (proceed) {
      submit(null, { method: "delete" });
      window.alert("OK");
    } else {
      window.alert("Cancel");
    }
  }
  const token = useRouteLoaderData("root");

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default EventItem;
