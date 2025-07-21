import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventsRoot from "./pages/EventsRoot";
import EventsPage from "./pages/Events";
import ErrorPage from "./pages/Error";
import NewsletterPage, {action as newsletterAction} from "./pages/Newsletter";
import { loader as eventDetailLoader, action as eventAction } from "./pages/EventDetail";
import { action as manipulateEventAction } from "./components/EventForm";



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
          },
          {
            path: ':id',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              { index: true, element: <EventDetailPage />, loader: eventDetailLoader, action: eventAction },
              { path: '/edit', element: <EditEventPage />, action: manipulateEventAction }
            ]
          },
          { path: '/new', element: <NewEventPage />, action: manipulateEventAction },
        ]
      },
      {
        path: '/newsletter',
        element: <NewsletterPage />,
        action: newsletterAction
      }
    ]
  },
  {}
])

function App() {
  return <RouterProvider router={router}>

  </RouterProvider>
}

export default App;
