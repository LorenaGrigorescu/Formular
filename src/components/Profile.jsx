import Navbar from "./navbar/Navbar";
import Map from "./map/Map";
function Profile() {
  return (
    <>
      <Navbar />
      <h1>Profile</h1>
      <Map center={{ lat: 46.77499425393059, lng: 23.6216376366903 }} />
    </>
  );
}

export default Profile;
