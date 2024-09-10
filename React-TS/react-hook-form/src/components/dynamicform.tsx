import { useForm } from "react-hook-form";

export const DynamicForm = () => {
  const form = useForm();
  const { handleSubmit, reset } = form;
  const onSubmit = async (data: any) => {
    console.log("Form Submitted!");
    reset();
  };

  return (
    <div>
      <h1>Dynamic Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="todo">Todo</label>
        <input type="text" id="todo" />
      </form>
    </div>
  );
};
