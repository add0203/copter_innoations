"use client"; // This line marks the component as a Client Component

import { useRef, useReducer } from "react";
import { toast } from "react-toastify";
import PageWrapper from "@/components/wrapper/page-wrapper";
import { Button } from "@/components/ui/button";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

interface FormData {
  user_name: string;
  user_contact: string;
  user_email: string;
  organisation_name: string;
  message: string;
}

interface State {
  done: boolean;
}

type Action = { type: "SEND_EMAIL_SUCCESS" } | { type: "RESET_EMAIL_STATUS" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SEND_EMAIL_SUCCESS":
      return { ...state, done: true };
    case "RESET_EMAIL_STATUS":
      return { ...state, done: false };
    default:
      return state;
  }
};

const initialState: State = { done: false };
const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null); // Type the ref as HTMLFormElement
  const [state, dispatch] = useReducer(reducer, initialState); // Use useReducer for state management

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload on form submission

    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formRef.current!,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        )

        .then(
          (result) => {
            console.log(result.text); // Log success message
            dispatch({ type: "SEND_EMAIL_SUCCESS" }); // Dispatch action on successful email send
            toast.success("Email sent successfully!"); // Show success toast notification
          },
          (error) => {
            console.log(error.text); // Log error message if email fails to send
            dispatch({ type: "RESET_EMAIL_STATUS" }); // Reset status if needed
            toast.error("Failed to send email. Please try again later."); // Show error toast notification
          }
        );
    }
  };

  return (
    <PageWrapper>
      <div className="bg-white dark:bg-black     rounded-lg p-6 w-full max-w-lg mt-8 transition-colors duration-300 m-6">
        <p className="mb-4 text-center text-gray-900 dark:text-gray-300">
          If you have any questions or need further assistance, please feel free
          to reach out.
          <strong>We&apos;re here to help!</strong>
        </p>

        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            handleSubmit(e); // Call the submit handler
            formRef.current!.reset(); // Reset the form after submission
          }}
          className="flex flex-col border dark:border-gray-700 rounded-xl p-4 gap-3 mb-6 w-full "
        >
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            required
            className="border border-gray-300 dark:border-gray-700 p-2 rounded mb-4 w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-300"
          />
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            required
            className="border border-gray-300 dark:border-gray-700 p-2 rounded mb-4 w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-300"
          />
          <input
            type="text"
            placeholder="Contact Number"
            name="user_contact"
            required
            className="border border-gray-300 dark:border-gray-700 p-2 rounded mb-4 w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-300"
          />
          <input
            type="text"
            placeholder="Organisation"
            name="organisation_name"
            required
            className="border border-gray-300 dark:border-gray-700 p-2 rounded mb-4 w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-300"
          />
          <textarea
            placeholder="Message"
            name="message"
            rows={5}
            required
            className="border border-gray-300 dark:border-gray-700 p-2 rounded mb-4 w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-300"
          ></textarea>

          <Button type="submit">Submit</Button>
        </form>
      </div>
      <ToastContainer />
    </PageWrapper>
  );
};

export default Contact;
