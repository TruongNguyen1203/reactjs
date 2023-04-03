import EventsNavigation from '../components/EventsNavigation'
import { Outlet } from 'react-router-dom'

const EventRootLayout = () => {
    return <div>
        <EventsNavigation></EventsNavigation>
        <Outlet/>
    </div>
}

export default EventRootLayout