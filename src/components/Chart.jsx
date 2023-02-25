import React from "react";
import { Canvas } from "reaflow";

const jsonData = {
  Name: "John Doe",
  Age: 30,
  Address: {
    Street: "123 Main St",
    City: "Anytown",
    State: "Anystate",
    Zip: "12345",
  },
  PhoneNumbers: [
    {
      Type: "home",
      Number: "555-555-5555",
    },
    {
      Type: "work",
      Number: "555-555-5555",
    },
  ],
};

function Chart() {
  const mapper = (data) => {
    const nodes = [];
    const edges = [];

    function recursiveMapping(data, parent) {
      for (const key in data) {
        if (typeof data[key] === "object") {
          nodes.push({ id: key, label: key });
          edges.push({ from: parent, to: key });
          recursiveMapping(data[key], key);
        } else {
          nodes.push({ id: key, label: key });
          edges.push({ from: parent, to: key });
        }
      }
    }
    recursiveMapping(data, "jsonData");
    return { nodes, edges };
  };

  return (
    <Canvas
      maxWidth={1200}
      maxHeight={800}
      nodes={[
        {
          id: "1",
          text: "1",
        },
        {
          id: "2",
          text: "2",
        },
        {
          id: "3",
          text: "3",
        },
        {
          id: "4",
          text: "4",
        },
      ]}
      edges={[
        {
          id: "1-4",
          from: "1",
          to: "4",
        },
        { id: "1-3", from: "1", to: "3" },
        { id: "1-2", from: "1", to: "2" },
      ]}
    />
  );
}

export default Chart;
