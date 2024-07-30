import { useForm } from 'react-hook-form'
import { DevTool } from "@hookform/devtools"

// Debug counter to see how many time the component is rendered
let renderCount = 0

type FormValues = {
    username: string
    email: string
    channel: string
}

export const YouTubeForm = () => {
    const form = useForm<FormValues>(); // Adding the formvalues types when invoking this
    const { register, control, handleSubmit } = form // Destructing: This method allows us to register a form control with react hook form
    // const { name, ref, onChange, onBlur } = register("username") // This method returns 4 methods that we need to hook into the form control

    // Define a function that will be called on submit
    const onSubmit = (data: FormValues) => {
        console.log('Form submitted!', data)
        // saveToFile(data)
    }

    // Function to save data to a file!
    const saveToFile = (formData: FormValues) => {
        const data = JSON.stringify(formData, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'form_data.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    renderCount++
    return (
        <div>
            <h1>YouTube Form ({renderCount / 2})</h1> {/*React strict mode renders components twice in dev mode */}
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor='username'>Username</label>
                {/* Doing the below allows RHF to start tracking the state of the form.*/}
                <input type='text' id='username' {...register("username", {
                    required: {
                        value: true,
                        message: "Username is required!"
                    }
                })} />

                <label htmlFor='email'>Email</label>
                {/* Or simply */}
                <input type='email' id='email' {...register("email", {
                    pattern: {
                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email format",
                    },
                })} />

                <label htmlFor='channel'>Channel</label>
                <input type='text' id='channel' {...register("channel", {
                    minLength: {
                        value: 8,
                        message: "Minimum length is 8",
                    }
                })} />

                <button>Submit</button>
            </form>
            <DevTool control={control} /> {/*Invoke the dev tool */}
        </div>
    )
}
