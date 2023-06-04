import BookAppointment from "./BookAppointment";

const Profile = () => {
  return (
    <>
      <Navbar />
      <h1>Profile</h1>
      <Map center={{ lat: 46.77499425393059, lng: 23.6216376366903 }} />
      <div className="moveRight">
        <BookAppointment />
      </div>
    </>
  );
};

export default Profile;
