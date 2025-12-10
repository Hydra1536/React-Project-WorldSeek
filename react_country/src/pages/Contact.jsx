export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="section-contact">
      <h2 align="center" className="container-title">Contact Us</h2>

      <div className="container-wrapper container">
        {/* ADDED className="contact-form" HERE */}
        <form action={handleFormSubmit} className="contact-form">
          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
          />
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="off"
          />
          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>
          <button value="send" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};