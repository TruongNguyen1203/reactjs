import EventForm from '../components/EventForm'
import {useRouteLoaderData} from 'react-router-dom'

const EditEventPage = () => {
    var data = useRouteLoaderData('event-detail');

    return <EventForm event={data.event} method='PATCH'/>
}

export default EditEventPage