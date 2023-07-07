import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const url = "/api/products";

export default function ListingPage() {
  const { data } = useSWR(url, fetcher);
  console.log(data);

  return (
    <ul>
      {data?.map((product) => (
        <li key={product.id}>
          <h1>
            {" "}
            Name: {product.name} - {product.description}
          </h1>
          <p> Category: {product.category} </p>
          <p>
            {" "}
            Price: {product.price}
            {product.currency}{" "}
          </p>
        </li>
      ))}
    </ul>
  );
}
