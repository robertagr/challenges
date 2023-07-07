import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(`/api/products/${id}`, fetcher);
  console.log(data);
  return (
    <>
      <h1>Details:</h1>
      <h1> {data.name}</h1>
    </>
  );
}
