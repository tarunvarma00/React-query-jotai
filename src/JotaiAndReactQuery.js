import { useEffect } from "react";

import { useAtom, atom } from "jotai";
import { useQuery } from "react-query";

const userAtom = atom(null);

function JotaiAndReactQuery() {
  const [users, setUsers] = useAtom(userAtom);

  console.log("userrrrr", users);

  const { isLoading, error, data } = useQuery("user", () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    )
  );

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data,setUsers]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <ol>
        {users?.map((user) => {
          return <li>{user.username}</li>;
        })}
      </ol>
    </div>
  );
}

export default JotaiAndReactQuery;
