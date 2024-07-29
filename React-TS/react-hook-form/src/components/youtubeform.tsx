import { useForm } from 'react-hook-form'

export const YouTubeForm = () => {
    const form = useForm();
    const { register } = form // This method allows us to register a form control with react hook form
    const { name, ref, onChange, onBlur } = register("username") // This method returns 4 methods that we need to hook into the form control

    return (
        <div>
            <form>
                <label htmlFor='username'>Username</label>
                {/* Doing the below allows RHF to start tracking the state of the form.*/}
                <input type='text' id='username' name={name} ref={ref} onChange={onChange} onBlur={onBlur} />

                <label htmlFor='email'>Email</label>
                {/* Or simply */}
                <input type='email' id='email' {...register("email")} />

                <label htmlFor='channel'>Channel</label>
                <input type='text' id='channel' {...register("channel")} />

                <button>Submit</button>
            </form>
        </div>
    )
}
