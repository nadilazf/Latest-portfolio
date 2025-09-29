function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      project: '',
      message: ''
    });
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormData({ name: '', email: '', project: '', message: '' });
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    return (
      <section id="contact" className="py-20 bg-white" data-name="contact" data-file="components/Contact.js">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--accent-color)]">
              Get In Touch
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              Ready to create documentation that truly serves your users? Let's discuss your project and how I can help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center">
                    <div className="icon-mail text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--accent-color)]">Email</h3>
                    <p className="text-[var(--text-secondary)]">nadilazarifani506@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center">
                    <div className="icon-linkedin text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--accent-color)]">LinkedIn</h3>
                    <p className="text-[var(--text-secondary)]">https://www.linkedin.com/in/nadilazarifani/</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center">
                    <div className="icon-clock text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--accent-color)]">Response Time</h3>
                    <p className="text-[var(--text-secondary)]">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="icon-check-circle text-4xl text-green-600 mb-4"></div>
                  <h3 className="text-xl font-semibold text-[var(--accent-color)] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                        placeholder="nadilazarifani506@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full btn-primary">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}