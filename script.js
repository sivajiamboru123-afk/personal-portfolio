const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");

if (form && status) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim()
    };

    if (!formData.name || !formData.email || !formData.message) {
      status.textContent = "Please fill in every field.";
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("API unavailable");
      status.textContent = "Thank you! Your message was received.";
      form.reset();
    } catch {
      status.textContent = "Demo mode: your form looks good, but the backend is not connected yet.";
    }
  });
}
