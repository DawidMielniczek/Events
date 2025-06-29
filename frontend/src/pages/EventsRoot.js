import { Outlet} from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

export default function EventsRoot(){
    return (
        <>
        <main>
        <EventsNavigation />
        </main>
        <Outlet />
        </>
    );
}