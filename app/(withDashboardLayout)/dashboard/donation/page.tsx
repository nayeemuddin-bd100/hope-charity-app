"use client";
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

interface Donation {
  id: number;
  donorName: string;
  email: string;
  amount: number;
  date: string;
}

export default function DonationsPage() {
  const [donations, setDonations] = useState<Donation[]>([
    {
      id: 1,
      donorName: "John Doe",
      email: "john@example.com",
      amount: 100,
      date: "2024-07-01",
    },
    {
      id: 2,
      donorName: "Jane Smith",
      email: "jane@example.com",
      amount: 250,
      date: "2024-07-02",
    },
    {
      id: 3,
      donorName: "Bob Johnson",
      email: "bob@example.com",
      amount: 500,
      date: "2024-07-03",
    },
    // Add more mock data as needed
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [donationsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDonations = donations.filter(
    (donation) =>
      donation.donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastDonation = currentPage * donationsPerPage;
  const indexOfFirstDonation = indexOfLastDonation - donationsPerPage;
  const currentDonations = filteredDonations.slice(
    indexOfFirstDonation,
    indexOfLastDonation
  );

  const deleteDonation = (donationId: number) => {
    setDonations(donations.filter((donation) => donation.id !== donationId));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Donations</h1>
      <div className="mb-4">
        <Input
          placeholder="Search donations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Donor Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentDonations.map((donation) => (
            <TableRow key={donation.id}>
              <TableCell>{donation.donorName}</TableCell>
              <TableCell>{donation.email}</TableCell>
              <TableCell>${donation.amount.toFixed(2)}</TableCell>
              <TableCell>{donation.date}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  onClick={() => deleteDonation(donation.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 flex justify-center">
        {/* <Pagination
          currentPage={currentPage}
          totalCount={filteredDonations.length}
          pageSize={donationsPerPage}
          onPageChange={setCurrentPage}
        /> */}
      </div>
    </div>
  );
}
