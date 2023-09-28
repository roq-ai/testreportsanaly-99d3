import * as yup from 'yup';

export const reportValidationSchema = yup.object().shape({
  report_name: yup.string().required(),
  report_status: yup.string().required(),
  test_run_id: yup.string().nullable().required(),
  build_id: yup.string().nullable().required(),
});
