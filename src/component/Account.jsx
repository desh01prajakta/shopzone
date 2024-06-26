import { useParams } from "react-router-dom";
import { useAccountQuery } from "../redux/api";
import "../style/user.css";

function Account({ userId, token }) {
  const { data, error, isLoading } = useAccountQuery({ id: userId, token });

  if (error || (!data?.username && isLoading)) {
    return <p>Something went wrong!</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="user4">
      <h2 className="uname">User</h2>
      <div>
        {isLoading && <p>Loading...</p>}
        <ul className="userdetails4">
          <li>Username: {data.username}</li>
          <li>Email: {data.email}</li>
          <li>First Name: {data.name.firstname}</li>
          <li>Last Name: {data.name.lastname}</li>
          <li>Phone: {data.phone}</li>
          <li>Address:</li>
          <li>City:{data.address.city}</li>
          <li>
            Geolocation(Lat,Long):{data.address.geolocation.lat},{" "}
            {data.address.geolocation.long}
          </li>
          <li>Street Number:{data.address.number}</li>
          <li>Street:{data.address.street}</li>
          <li>Zipcode:{data.address.zipcode}</li>
        </ul>
      </div>
    </div>
  );
}
export default Account;
