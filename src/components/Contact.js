import emailjs from "emailjs-com";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || !form.subject) {
      toast.warn("Please Enter all the details");
      return;
    }
    const templateParams = {
      name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    };

    emailjs
      .send(
        "service_hncl1ma",
        "template_t66ykvt",
        templateParams,
        "YtZ9MQPGO8jJoR6EZ"
      )
      .then(
        function (response) {
          toast.success("Email has been sent");
          setForm({
            name: "",
            email: "",
            message: "",
            subject: "",
          });
        },
        // we can right catch like this also this faster than catch block
        function (error) {
          toast.error("Something went wrong");
        }
      );
  };

  return (
    <div
      id="contact"
      className="h-full w-full flex items-center justify-center"
    >
      <form className="flex my-[6rem] flex-col  dark:bg-dark  space-y-4 border-solid border border-dark/40 dark:border-white p-8 px-[4rem] rounded-sm">
        <h1 className="text-center text-2xl dark:text-white mb-4">
          CONTACT ME
        </h1>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          name="name"
          required
          className="p-2 outline-none border-solid-2 border border-dark/40 dark:border-none"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          required
          onChange={(e) =>
            setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          className="p-2 outline-none border-solid-2 border border-dark/40 dark:border-none"
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          required
          onChange={(e) =>
            setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          className="p-2 outline-none border-solid-2 border border-dark/40 dark:border-none"
        />
        <textarea
          cols={50}
          rows={5}
          placeholder="Message"
          name="message"
          required
          onChange={(e) =>
            setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          className="p-2 outline-none border-solid-2 border border-dark/40 dark:border-none"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="p-2 outline-none border-none cursor-pointer transition hover:opacity-70 bg-blue-700 text-white font-semibold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
