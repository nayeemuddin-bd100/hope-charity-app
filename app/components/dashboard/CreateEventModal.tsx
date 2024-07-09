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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useState } from "react";

const CreateEventModal = ({
  label = "Create New Event",
  className,
}: {
  label?: string;
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={cn("text-white bg-primary", className)}>
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
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
              value={newEvent.volunteer}
              onValueChange={(value) =>
                setNewEvent({ ...newEvent, volunteer: value })
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a volunteer" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectLabel>Volunteer</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* <Select
              // id="volunteer"
              value={newEvent.volunteer}
              onValueChange={(value) =>
                setNewEvent({ ...newEvent, volunteer: value })
              }
            >
              <option value="Jane Smith">Jane Smith</option>
              <option value="John Doe">John Doe</option>
            </Select> */}
          </div>
        </div>
        <Button
          onClick={() => (createEvent(), setOpen(false))}
          className="text-white"
        >
          Create Event
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEventModal;
