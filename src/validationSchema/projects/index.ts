import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  project_name: yup.string().required(),
  project_status: yup.string().required(),
  team_id: yup.string().nullable().required(),
});
