import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('First name is required!')
    .min(5, 'First name has to be five characters!'),
  topping1: yup.boolean(),
  topping2: yup.boolean(),
  topping3: yup.boolean(),
  topping4: yup.boolean(),
  special: yup
    .string()
})

export default formSchema;