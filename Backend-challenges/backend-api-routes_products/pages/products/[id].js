import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return <h1>Error loading data</h1>;
  if (isLoading) return <h2>Loading...</h2>;
  console.log(data);

  return (
    <>
      <h1>Details:</h1>
      <p> {data.name}</p>
    </>
  );
}
