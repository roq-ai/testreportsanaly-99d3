import * as yup from 'yup';

export const testRunValidationSchema = yup.object().shape({
  test_name: yup.string().required(),
  status: yup.string().required(),
  start_time: yup.date().required(),
  end_time: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
