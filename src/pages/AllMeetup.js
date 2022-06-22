import { useState } from "react";

import MeetupList from "../components/meetups/MeetupList";


function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true)
  const [LoadedMeetups, setLoadedMeetups] = useState([]);


  fetch(
    "https://meetups-a0d13-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
  ).then(response => {
    return response.json()
  }).then(data => {
    setIsLoading(false)
    setLoadedMeetups(data)
  })

  if (isLoading) {
    return (
      <section>
        <p>Loading... </p>
      </section>
    )
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={LoadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
