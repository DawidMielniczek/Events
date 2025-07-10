import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage, { action as newEventAction} from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventsRoot from "./pages/EventsRoot";
import EventsPage from "./pages/Events";
import ErrorPage from "./pages/Error";
import { loader as eventsLoader } from "./pages/Events";
import { loader as eventDetailLoader, action as eventAction } from "./pages/EventDetail";



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/events',
        element: <EventsRoot />,
        children: [
          {
            index: true, element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':id',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              { index: true, element: <EventDetailPage />, loader: eventDetailLoader, action: eventAction },
              { path: 'edit', element: <EditEventPage /> }
            ]
          },
          { path: 'new', element: <NewEventPage />, action: newEventAction },

        ]
      },
    ]
  },
  {}
])

function App() {
  return <RouterProvider router={router}>

  </RouterProvider>
}

export default App;
