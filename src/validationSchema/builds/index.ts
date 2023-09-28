import * as yup from 'yup';

export const buildValidationSchema = yup.object().shape({
  build_name: yup.string().required(),
  build_status: yup.string().required(),
  start_time: yup.date().required(),
  end_time: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
