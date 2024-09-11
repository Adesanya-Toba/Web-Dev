import { useFieldArray, useForm } from "react-hook-form";

type ActuatorValues = {
  actuatorDetails: {
    name: string;
    macAddress: string;
    password: string;
  }[];
};

export default function DynamicForm() {
  const form = useForm<ActuatorValues>({
    defaultValues: {
      actuatorDetails: [
        {
          name: "Enter Actuator Name",
          macAddress: "Enter MAC_Address",
          password: "Enter Bluetooth password",
        },
      ],
    },
  });

  const { handleSubmit, reset, control } = form;

  async function onSubmit(data: ActuatorValues) {
    console.log("Form Submitted!");
    reset();
  }

  const { fields, append, remove } = useFieldArray({
    control,
    name: "actuatorDetails",
  });

  function handleAppend() {
    append({ name: "", macAddress: "", password: "" });
  }

  function handleRemove(index: number) {
    remove(index);
  }

  // Render Form
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Enter your details.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block test-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-insert ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    hello.com/
                  </span>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="janesmith"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
