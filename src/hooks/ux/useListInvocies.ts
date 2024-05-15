import { useState } from "react";
import useListConnections from "../useListConnections";

export const useListInvoices = () => {

    const [invoices, setInvoices] = useState([]);

    const { data: connections } = useListConnections();

  const trigger = () => {
    fetch("/api/unify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        connectionKeys: connections?.rows?.map((c) => c.key),
        // connectionKeys: ["test::microsoft-dynamics-365-business-central::krish's-group-14"],
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setInvoices(data);
      });
  };

    return {
        invoices,
        trigger,
    };

};
