import CreateCauseModal from "@/app/components/dashboard/CreateCauseModal";
import CreateEventModal from "@/app/components/dashboard/CreateEventModal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Calendar, DollarSign, Users } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Donations
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Causes</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">2 new this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Volunteers
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">+201 this quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Events
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Next event in 5 days
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              New donation of $500 received for &quot;Clean Water
              Initiative&quot;
            </li>
            <li>
              10 new volunteers signed up for &quot;Community Cleanup&quot;
              event
            </li>
            <li>
              &quot;Education for All&quot; cause reached 80% of its funding
              goal
            </li>
            <li>
              New event &quot;Annual Charity Gala&quot; scheduled for next month
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <CreateCauseModal className="bg-indigo-600 hover:bg-indigo-700 rounded" />
          <CreateEventModal
            label="  Schedule Event"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          />

          <Link
            href="/dashboard/donation"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          >
            View Recent Donations
          </Link>
          <Link
            href="/dashboard/user"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
          >
            Manage Users
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
