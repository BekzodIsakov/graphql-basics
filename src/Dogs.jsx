import React from "react";
import { useQuery } from "@apollo/client";

import { DOGS } from "./index";

export default function ({ setBreed }) {
  const { data, loading, error } = useQuery(DOGS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Ooops! {error}</div>;

  return (
    <div>
      <select onChange={(e) => setBreed(e.target.value)}>
        {data.dogs.map(({ id, breed }) => (
          <option key={id}>{breed}</option>
        ))}
      </select>
    </div>
  );
}
