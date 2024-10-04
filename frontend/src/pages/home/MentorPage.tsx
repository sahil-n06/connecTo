import React from 'react';
import { Link } from 'react-router-dom';

function MentorPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center bg-blue-800 p-4 text-white">
        <h1 className="text-xl font-bold">Mentor Dashboard</h1>
        <nav>
          <Link to="/profile" className="mr-4">Profile</Link>
          <Link to="/settings" className="mr-4">Settings</Link>
          <Link to="/logout" className="text-red-400">Logout</Link>
        </nav>
      </header>

      <main className="mt-8">
        <section className="bg-white shadow-md rounded-lg p-4 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Mentor Profile</h2>
          <div className="flex items-center">
            <img
              src="/profile-pic-placeholder.png"
              alt="Profile"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-600">Software Engineer | 5 years of experience</p>
            </div>
          </div>
        </section>

        <section className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-4">Mentee Requests</h2>
          <ul>
            <li className="mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Mentee: Jane Smith</p>
                  <p className="text-sm text-gray-600">Interested in: Web Development</p>
                </div>
                <button className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                  Accept
                </button>
              </div>
            </li>
            {/* More mentee requests */}
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-4 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Mentoring Sessions</h2>
          <p>No upcoming sessions</p>
        </section>
      </main>
    </div>
  );
}

export default MentorPage;
