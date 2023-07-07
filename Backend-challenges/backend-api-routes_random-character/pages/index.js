import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());
const url = "api/random-character";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <h1>Error in fetching</h1>;

  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);

  return (
    <>
      <h1>
        {data.firstName} {data.lastName}
      </h1>
      <p>
        {" "}
        {data.twitterName} - {data.geohash}
      </p>
    </>
  );
}
