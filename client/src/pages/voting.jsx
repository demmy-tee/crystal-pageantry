import React from "react";
import { useState, useEffect } from "react";
import api from "../api/axios";

//create a variable to fetch contestants from the backend




const Voting = () => {
  const [contestants, setContestants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
  const fetchContestants = async () => {
    try {
      const response = await api.get("/contestants");
      // update state with the fetched contestants
      setContestants(response.data);

    } catch (err) {
      setError("Failed to fetch contestants. Please try again later.");
    } finally {
      setLoading(false);
    }
    }
    fetchContestants();
  }, []);

  if (loading) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }
  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }
  return (
    <div
      className="relative flex min-h-screen flex-col  justify-between overflow-x-hidden"
      style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}
    >
      {/* Header */}
      <header className="flex items-center bg-transparent p-4 pb-2 justify-between">
        <h1 className="text-white text-xl font-bold flex-1 text-center pr-10">
          Premium Voting
        </h1>
      </header>

      {/* Main */}
      <main className="flex-grow px-4">
        <div className="text-center pt-8 pb-6">
          <h2 className="text-white text-4xl font-bold">
            Mr &amp; Miss FRESHER
          </h2>
          <p className="text-[#bab19c] mt-2">Vote for your favorite contestant</p>
        </div>

        {/* Purchase Ticket */}
        <div className="sticky top-4 z-10 mb-6 justify-center flex">
          <button className="flex  h-14 px-4 items-center justify-center rounded-xl border-2  border-amber-200  text-gray-400 text-lg font-bold  hover:from-primary-600 hover:to-primary-500 transition-all duration-300 transform hover:scale-105">
            <span className="truncate">Purchase Ticket to Vote</span>
          </button>
        </div>

        {/* Contestants Grid */}
<div className="grid grid-cols-2 gap-4">
  {contestants.map((contestant) => {
    return (
      <div
        key={contestant._id}
        className="flex flex-col rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform bg-bachelor-200 border-2 border-gray-200"
      >
        {/* Contestant Photo */}
        <div className="relative ">
          <img
            src={contestant.photo}
            alt={contestant.name}
            className="mx-auto block h-48 w-full rounded-xl  object-cover"
          />
        </div>

        {/* Contestant Info */}
        <div className="flex flex-col items-center text-center p-3">
          <h3 className="text-lg font-bold text-primary">{contestant.name}</h3>
          <p className="text-lg text-amber-50">{ contestant.gender}</p>
          <p className="text-sm text-gray-50">{contestant.bio}</p>


          {/* Vote Button */}
          <button className="mt-2 w-full h-10 px-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary-600 transition">
            Vote
          </button>
        </div>
      </div>
    );
  })}
</div>

      </main>
    </div>
  );
};

export default Voting;
