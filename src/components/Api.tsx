import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { Button } from "./ui/button";

interface TestResponse {
  id: number;
  message: string;
}

export default function Api() {
  const [callable, setCallable] = useState(false);
  const { data, isLoading, error } = useQuery<TestResponse[]>({
    queryKey: ["test"],
    queryFn: () => api.get("/api/test"),
    enabled: callable,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1 className="text-2xl font-bold">Api</h1>
      <Button onClick={() => setCallable(true)}>Call API</Button>
      <div className="flex flex-col gap-4">
        {data &&
          data.map((item) => {
            return (
              <div key={item.id}>
                id: {item?.id}
                message: {item?.message}
              </div>
            );
          })}
      </div>
    </>
  );
}
