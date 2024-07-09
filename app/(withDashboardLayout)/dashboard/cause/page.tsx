"use client";
import CreateCauseModal from "@/app/components/dashboard/CreateCauseModal";
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

export default function ManageCauses() {
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
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Causes</h1>
      <div className="mb-4 flex justify-between">
        <Input placeholder="Search causes..." className="max-w-sm" />
        <CreateCauseModal />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Goal</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {causes.map((cause) => (
            <TableRow key={cause.id}>
              <TableCell>{cause.name}</TableCell>
              <TableCell>{cause.description}</TableCell>
              <TableCell>${cause.goal}</TableCell>
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
                  // onClick={() => deleteCause(cause.id)}
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
