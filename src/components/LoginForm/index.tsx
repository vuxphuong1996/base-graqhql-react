import { useForm, Controller } from 'react-hook-form';
import Input from '@material-ui/core/Input';

interface LoginFormProps {
    login: () => void;
}

const LoginForm: React.FC<LoginFormProps> = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => (
                    <Input onChange={onChange} value={value} />
                )}
            />
            <Input type="submit" />
        </form>
    );
};

export default LoginForm;
