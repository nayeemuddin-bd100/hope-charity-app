"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pagination } from "@/components/ui/pagination";
import { Select } from "@/components/ui/select";
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
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create New Event</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Event</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newEvent.name}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, name: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={newEvent.date}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, date: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="volunteer" className="text-right">
                  Volunteer
                </Label>
                <Select
                  // id="volunteer"
                  value={newEvent.volunteer}
                  onValueChange={(value) =>
                    setNewEvent({ ...newEvent, volunteer: value })
                  }
                >
                  <option value="Jane Smith">Jane Smith</option>
                  <option value="John Doe">John Doe</option>
                </Select>
              </div>
            </div>
            <Button onClick={createEvent}>Create Event</Button>
          </DialogContent>
        </Dialog>
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
                <Button variant="outline" className="mr-2">
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => deleteEvent(event.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
      // currentPage={currentPage}
      // totalCount={events.length}
      // pageSize={eventsPerPage}
      // onPageChange={setCurrentPage}
      />
    </div>
  );
}
