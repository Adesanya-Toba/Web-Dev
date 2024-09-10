import { useFieldArray, useForm } from "react-hook-form";

type ActuatorValues = {
  actuatorDetails: {
    name: string;
    macAddress: string;
    password: string;
  }[];
};

export const DynamicForm = () => {
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
    <div>
      <div className="text-xl text-blue-400">Dynamic Form</div>
      <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="todo">Todo</label>
        <input type="text" id="todo" />
        <div>hello</div>
      </form>
    </div>
  );
};
