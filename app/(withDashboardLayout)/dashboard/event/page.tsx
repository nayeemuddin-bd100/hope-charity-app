"use client";
import CreateEventModal from "@/app/components/dashboard/CreateEventModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

export default function ManageEvents() {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Charity Gala",
      date: "2024-08-15",
      volunteer: "Jane Smith",
    },
    { id: 2, name: "Food Drive", date: "2024-09-01", volunteer: "John Doe" },
    // Add more mock data as needed
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(10);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const deleteEvent = (eventId: any) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    volunteer: "",
  });

  const createEvent = () => {
    setEvents([...events, { id: events.length + 1, ...newEvent }]);
    setNewEvent({ name: "", date: "", volunteer: "" });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Events</h1>
      <div className="mb-4 flex justify-between">
        <Input placeholder="Search events..." className="max-w-sm" />
        <CreateEventModal />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Assigned Volunteer</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentEvents.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{event.name}</TableCell>
              <TableCell>{event.date}</TableCell>
              <TableCell>{event.volunteer}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  className=" mr-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white "
                >
                  Edit
                </Button>
                <Button
                  variant="outline"
                  className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  onClick={() => deleteEvent(event.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
