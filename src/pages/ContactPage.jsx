import { Outlet } from "react-router-dom";
import { ContactItem } from "../components/ContactItem";

import { useEffect, useState } from "react";

const ContactPage = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    async function getContacts() {
      const data = await fetch("https://std.bit-camp.ru/contacts");
      const respons = await data.json();
      setData(respons.data);
    }
    getContacts();
  }, []);
  return (
    <div className="flex gap-8">
      <div className="container max-w-3xl mx-auto py-10">
        {data &&
          data.map((e) => (
            <ContactItem
              key={e.id}
              name={e.name}
              surname={e.surname}
              id={e.id + ""}
            />
          ))}
      </div>
      <Outlet />
    </div>
  );
};

export default ContactPage;
