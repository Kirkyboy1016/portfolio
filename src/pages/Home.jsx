import avatar from "../assets/profile_picture.jpg";

export default function Home() {
  return (
    <main className="main">
      <div className="header">
        <section className="profile">
          <img src={avatar} alt="Profile" className="avatar" />
          <div className="profile-info">
            <h2>Kirk Nathan M. Alvarado</h2>
          </div>
        </section>

        <section>
          <p className="about-box">
            Good day! I am Kirk Nathan M. Alvarado, studying at Adamson
            University and a passionate Information Technology student with
            interest in web development and logical thinking. With a heart full
            of hope to be a successful developer in the future.
          </p>
        </section>
      </div>
    </main>
  );
}
