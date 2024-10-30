"use client";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Handle form submission
  const onSubmit = async (data: any) => {
    const email = data.email;

    // Google Form URL with query parameter for email field
    const encodedEmail = encodeURIComponent(email);
    const url = `https://docs.google.com/forms/d/e/1FAIpQLSevSoN2GNuN3DW120QUVaL8uSpU7vftZ_XQlj7gu-RaLee7VA/viewform?entry.123456789=${encodedEmail}`;
    window.open(url, "_blank");

    // Reset the form after submission
    reset();
  };

  return (
    <footer className="border-t dark:bg-black text-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2">
          {/* Form Section */}
          <div className="border-b py-6 lg:order-last lg:border-b-0 lg:border-s lg:py-10 lg:ps-10 ">
            <Image
              src="/copter_innovation.png"
              alt="Logo"
              width={100}
              height={100}
              className="h-12 w-auto rounded-sm items-center"
            />

            <h3 className="text-xl font-medium py-4">
              Fill the form to submit your custom order
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col rounded-md p-3 gap-4 mt-4 border"
            >
              {/* Email Input */}
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter your email"
                type="email"
                className="text-sm"
              />
              {/* Error Message */}
              {errors.email && (
                <p className="text-red-500 text-xs"> Enter the valid email</p>
              )}

              <Button type="submit" className="font-bold py-1 text-sm">
                Go Forward
              </Button>
            </form>
          </div>

          {/* Links Section */}
          <div className="py-6 lg:py-10 lg:pe-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <p className="font-bold mb-2">Contact</p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href=""
                      target="_blank"
                      className="transition hover:opacity-75"
                    >
                      +91 7569654270
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      target="_blank"
                      className="transition hover:opacity-75"
                    >
                      copterinnovations@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/copter-innovations/"
                      target="_blank"
                      className="transition hover:opacity-75"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Address</p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:opacity-75"
                    >
                      Sullurupeta, Tirupati
                    </a>
                  </li>
                  <li>
                    <a href="/" className="transition hover:opacity-75">
                      Andhra Pradesh-524121 INDIA
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 border-t pt-4">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <a
                    href="/"
                    target="_blank"
                    className="transition hover:opacity-75"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    className="transition hover:opacity-75"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-xs">&copy; 2024.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
