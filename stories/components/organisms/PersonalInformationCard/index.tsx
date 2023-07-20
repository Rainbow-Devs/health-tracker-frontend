"use client";

import { useFormStore, Form, FormLabel, FormInput } from "@ariakit/react";
import { BsPerson, BsChevronCompactRight } from "react-icons/bs";

export function PersonalInformationCard() {
  const form = useFormStore({
    defaultValues: {
      name: "First Last",
      email: "email@email.com",
      pronouns: "he/him/his"
    }
  });

  form.useSubmit(async state => {
    alert(JSON.stringify(state.values));
  });

  return (
    <div className="col-span-10 col-start-2 p-7 rounded-2xl shadow-md md:col-span-4 md:col-start-auto md:px-7 md:pb-12 dark:border-2 dark:border-ctaColor-dark">
      <div className="flex flex-col space-y-3">
        <header>
          <h2 className="text-2xl font-bold">Personal Information</h2>
        </header>

        <Form
          store={form}
          aria-labelledby="personal-information"
          className="space-y-3"
        >
          <div className="flex flex-col space-y-3">
            <FormLabel
              name={form.names.name}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </FormLabel>
            <div className="relative mb-6">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3.5 pointer-events-none">
                <BsPerson />
              </div>
              <FormInput
                className="block p-2.5 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:placeholder-gray-400 dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name={form.names.name}
                placeholder="First Name"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <FormLabel
              name={form.names.email}
              placeholder="email@email.com"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </FormLabel>
            <div className="relative mb-6">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3.5 pointer-events-none">
                <BsPerson />
              </div>
              <FormInput
                className="block p-2.5 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:placeholder-gray-400 dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name={form.names.email}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <FormLabel
              name={form.names.pronouns}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Pronouns
            </FormLabel>
            <p
              id="helper-text-explanation"
              className="mt-2 text-sm text-gray-500 dark:text-gray-400"
            >
              The list of pronouns lists the most commonly used pronouns. You
              can select multiple options
            </p>

            <div className="relative mb-6">
              <div className="flex absolute inset-y-0 right-0 items-center pr-3.5 pointer-events-none">
                {" "}
                <BsChevronCompactRight />
              </div>
              <FormInput
                className="block p-2.5 pr-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:placeholder-gray-400 dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name={form.names.pronouns}
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
