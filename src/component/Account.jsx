import { useAccountQuery } from "../redux/api";

function Account(props) {
  const { data, error, isLoading } = useAccountQuery(props);

  if (error || (!data?.username && isLoading)) {
    return <p>Something went wrong!</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <section>
      <h2>Account</h2>
      <div>
        {isLoading && <p>Loading...</p>}
          <ul>
            <li>Username: {data.username}</li>
            <li>Email: {data.email}</li>
            <li>First Name: {data.firstname}</li>
            <li>Last Name: {data.lastname}</li>
            <li>Phone: {data.phone}</li>
            <li>Address:{data.address}</li>

            {/* {data.email ? <li>Email: {data.email}</li> : ""} */}
            {/* {data.firstname ? <li>First Name: {data.firstname}</li> : ""} */}
            {/* {data.lastname ? <li>Last Name: {data.lastname}</li> : ""}
            {data.phone ? <li>Phone: {data.phone}</li> : ""}
            {data.address ? <li>Address: {data.address}</li> : ""} */}
          </ul>
        {/* )} */}
      </div>
    </section>
  );
}
export default Account;
