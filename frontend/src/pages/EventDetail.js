import { redirect, useLoaderData } from "react-router-dom";
import EventItem from '../components/EventItem';

export default function EventDetailPage() {
    const data = useLoaderData();

    return <EventItem event={data.event} />
}

export async function loader({ request, params }) {

    const id = params.id;
    const resposne = await fetch('http://localhost:8080/events/' + id);

    if (!resposne.ok) {
        throw new Response(JSON.stringify({ message: 'Could not fetch details for selected events.' }),
            { status: 500 });
    } else {
        return resposne;
    }
}

export async function action({ params, request }) {
    const eventId = params.id;
    const response = await fetch('http://localhost:8080/events/' + eventId,{
        method: request.method,
    });

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not detelete item.' }),
            { status: 500 });
    } else {
        return redirect('/events');
    }
}