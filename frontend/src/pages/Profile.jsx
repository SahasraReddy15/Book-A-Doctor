function Profile() {

  return (

    <div className="container py-5">

      <div
        className="
        card
        shadow
        border-0
        p-4"
      >

        <div className="text-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
            width="120"
          />

          <h2 className="mt-3">
            Patient Name
          </h2>

          <p>
            Patient@email.com
          </p>

        </div>

        <hr />

        <p>
          📱 Phone:
          9876543210
        </p>

        <p>
          🎂 Age:
          19
        </p>

        <p>
          🩸 Blood Group:
          O+
        </p>

        <button
          className="
          btn
          btn-primary"
        >
          Edit Profile
        </button>

      </div>

    </div>

  );

}

export default Profile;