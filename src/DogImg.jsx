import { NetworkStatus, useQuery } from "@apollo/client";

import { GET_DOG_PHOTO } from "./index";

export default function ({ breed }) {
  const { data, loading, error, refetch } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
    notifyOnNetworkStatusChange: true
    // pollInterval: 1500
  });

  if (NetworkStatus === 4) return "Loading...";
  if (loading) return "Loading...";
  if (error) return "Ooops!";

  return (
    <div>
      <button onClick={() => refetch("germanshepherd")}>Refetch</button>
      <img src={data.dog.displayImage} alt="dog" />
    </div>
  );
}
