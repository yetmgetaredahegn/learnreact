import {useForm, type Field, type FieldValues} from 'react-hook-form'
interface FormData {
    name: string;
    age: number;
}

const Form = () => {
    const {register,handleSubmit,formState: {errors}} = useForm<FormData>();
    const onSubmit = (data: FieldValues) => console.log(data);  
    // console.log(register);
    
    // const [person, setPerson] = useState({
    //     name: '',
    //     age: ''
    // });

    // const handleSubmit = (event: FormEvent) => {
    //     event.preventDefault();
    //     console.log(person);
    // }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    {...register('name',{required: true, maxLength: 20, minLength: 3})}
                        type="text" 
                        className="form-control" 
                        id="name" />
                        {errors.name?.type === 'required' && <p className='text-danger'>This is required</p>}
                        {errors.name?.type === 'minLength' && <p className='text-danger'>The name must be at least 3 charachters</p>}
            </div>
            <div className="mb-3"><label htmlFor="age" className="form-label">Age</label>
                <input 
                {...register('age')}
                id='age' 
                type="number" 
                className="form-control" /></div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form