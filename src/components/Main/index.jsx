import React from "react";

import {
  Welcome,
  Visiting,
  Explore,
  Video,
  Gallary,
  Tickets,
  Panorama,
  Contacts,
} from "./MainSections";

export default function Main() {
  return (
    <main>
      <Welcome />
      <Visiting />
      <Explore />
      <Video />
      <Gallary />
      <Tickets />
      <Panorama />
      <Contacts />
    </main>
  );
}
