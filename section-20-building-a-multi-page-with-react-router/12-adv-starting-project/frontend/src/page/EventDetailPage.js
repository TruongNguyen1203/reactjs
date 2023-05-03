import EventItem from "../components/EventItem";
import {
  json,
  useRouteLoaderData,
  redirect,
} from "react-router-dom";
import {getAuthToken} from '../utils/auth'

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
  var token = getAuthToken();
  var response = await fetch("http://localhost:8080/events/" + params.id, {
    method: request.method,
    headers: {
      Authorization: "Bear " + token,
    },
  });
  if (!response.ok) {
    throw json({ message: "Error when delete event" }, { status: 500 });
  }
  return redirect("/events");
}
