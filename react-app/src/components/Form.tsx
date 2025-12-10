import {useForm, type Field, type FieldValues} from 'react-hook-form'

const Form = () => {
    const {register,handleSubmit} = useForm();
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
                    {...register('name')}
                        type="text" 
                        className="form-control" 
                        id="name" />
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