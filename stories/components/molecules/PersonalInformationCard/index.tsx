"use client";

import {
  useFormStore,
  Form,
  FormLabel,
  FormInput,
  FormError,
  FormReset,
  FormSubmit
} from "@ariakit/react";
import { BsPerson, BsChevronCompactRight } from "react-icons/bs";

export function PersonalInformationCard() {
  const form = useFormStore({ defaultValues: { name: "", email: "" } });

  form.useSubmit(async state => {
    alert(JSON.stringify(state.values));
  });

  return (
    <div className="col-span-10 col-start-2 p-7 rounded-2xl shadow-md md:col-span-4 md:col-start-auto md:px-7 md:pb-12 dark:border-2 dark:border-ctaColor-dark">
      <Form store={form} aria-labelledby="personal-information">
        <h2 className="mb-6 text-xl font-semibold">Personal Information</h2>
        <div className="mb-6">
          <FormLabel
            name={form.names.name}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </FormLabel>

          <div className="relative">
            <span className="flex absolute inset-y-0 left-0 items-center pl-3">
              <BsPerson />
            </span>
            <FormInput
              name={form.names.name}
              placeholder="John Doe"
              className="py-2 pr-4 pl-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              disabled
            />
          </div>
        </div>
      </Form>
    </div>
  );
}
