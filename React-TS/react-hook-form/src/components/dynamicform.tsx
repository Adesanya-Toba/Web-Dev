import { useFieldArray, useForm } from "react-hook-form";

type ActuatorValues = {
  actuatorDetails: {
    name: string;
    macAddress: string;
    password: string;
  }[];
};

type PhoneNumber = {
  phoneNumber: {
    value: string;
  }[];
};

export default function DynamicForm() {
  const form = useForm<PhoneNumber>({
    defaultValues: {
      phoneNumber: [
        {
          value: "",
        },
      ],
    },
  });

  const { handleSubmit, reset, control, register } = form;

  async function onSubmit(data: PhoneNumber) {
    console.log(data);
    console.log("Form Submitted!");
    reset();
  }

  const { fields, append, remove } = useFieldArray({
    control,
    name: "phoneNumber",
  });

  function handleAppend() {
    append({ value: "" });
  }

  function handleRemove(index: number) {
    remove(index);
  }

  // Render Form
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-2">
      <div className="mb-3 sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-6xl text-center font-bold text-gray-900">
          Dynamic Form
        </h2>
      </div>

      <div className="my-3 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="mb-0 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className=""
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company-size"
                className="block text-sm font-medium text-gray-700"
              >
                Company Size
              </label>
              <div className="mt-1">
                <select name="company-size" id="company-size">
                  <option value="">Please select</option>
                  <option value="small">1 to 10 employees</option>
                  <option value="medium">11 to 50 employees</option>
                  <option value="large">50+ employees</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="space-y-2">
                {fields.map((field, index) => {
                  return (
                    <div key={field.id} className="flex items-center space-x-5">
                      <input
                        type="tel"
                        autoComplete="tel"
                        {...register(`phoneNumber.${index}.value` as const)}
                        className="mt-1"
                        placeholder="Enter Phone Number"
                      />
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm
                          text-sm font-medium text-white bg-red-700 hover:bg-red-700 focus:outline-none
                          focus:ring-2 focus:ring-offset-1 focus:ring-red-500"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  );
                })}

                <button
                  type="button"
                  onClick={() => append({ value: "" })}
                  className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm
                text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add phone number
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms-and-privacy"
                name="terms-and-privacy"
              />
              <label
                htmlFor="terms-and-privacy"
                className="ml-2  block text-sm text-gray-900"
              >
                I agree to the{" "}
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Terms{" "}
                </a>
                and{" "}
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm
                text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
