import EventItem from "../components/EventItem";
import { json, useLoaderData, useRouteLoaderData, redirect } from "react-router-dom";

const EventDetailPage = () => {
  var data = useRouteLoaderData("event-detail");
  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export async function loader({ params }) {
  var response = await fetch("http://localhost:8080/events/" + params.id);
  if (!response.ok) {
    throw json({ message: "Error when get event" }, { status: 404 });
  }
  return response;
}

export async function action({ params, request }) {
  var response = await fetch("http://localhost:8080/events/" + params.id, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Error when delete event" }, { status: 500 });
  }
  return redirect('/events');
}
