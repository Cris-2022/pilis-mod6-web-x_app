import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useTicketContext } from '../context';
import CodeInput from './CodeInput';
import FormButton from './FormButton';

interface FormData {
  code: string;
}

export default function FormTickets() {
  const { getTicket } = useTicketContext();
  const methods = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    void getTicket(data.code.toUpperCase());
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <CodeInput />
        <FormButton />
      </form>
    </FormProvider>
  );
}
