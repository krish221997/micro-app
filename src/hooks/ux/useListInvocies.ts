import { useState } from "react";

export const useListInvoices = () => {

    const [invoices, setInvoices] = useState([]);

  const trigger = () => {
    fetch("/api/unify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // connectionKeys: connections?.rows?.map((c) => c.key),
        connectionKeys: ["test::xero::krish's-group-13"],
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
