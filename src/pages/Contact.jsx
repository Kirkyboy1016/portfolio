const EMAIL = "alvaradokirknathan@gmail.com";
const GITHUB = "https://github.com/Kirkyboy1016";

export default function Contact() {
  return (
    <main className="main">
      <section className="contact">
        <h1>My Contact Information</h1>
        <div className="contact-card">
          <ul>
            <li>
              Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              Github:{" "}
              <a href={GITHUB} target="_blank" rel="noreferrer">
                github
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
