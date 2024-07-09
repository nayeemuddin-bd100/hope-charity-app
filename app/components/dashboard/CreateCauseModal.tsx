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
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useState } from "react";

const CreateCauseModal = ({
  label = "Create New Cause",
  className,
}: {
  label?: string;
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [newCause, setNewCause] = useState({
    name: "",
    description: "",
    goal: Number(0),
  });
  const [causes, setCauses] = useState([
    {
      id: 1,
      name: "Clean Water Initiative",
      description: "Providing clean water to rural areas",
      goal: 10000,
    },
    {
      id: 2,
      name: "Education for All",
      description: "Supporting education in underprivileged communities",
      goal: 15000,
    },
  ]);

  const createCause = () => {
    setCauses([...causes, { id: causes.length + 1, ...newCause }]);
    setNewCause({ name: "", description: "", goal: Number(0) });
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
          <DialogTitle>Create New Cause</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={newCause.name}
              onChange={(e) =>
                setNewCause({ ...newCause, name: e.target.value })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              value={newCause.description}
              onChange={(e) =>
                setNewCause({ ...newCause, description: e.target.value })
              }
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="goal" className="text-right">
              Goal ($)
            </Label>
            <Input
              id="goal"
              type="number"
              value={newCause.goal}
              onChange={(e) =>
                setNewCause({ ...newCause, goal: Number(e.target.value) })
              }
              className="col-span-3"
            />
          </div>
        </div>
        <Button
          onClick={() => (createCause(), setOpen(false))}
          className="text-white"
        >
          Create Cause
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCauseModal;
