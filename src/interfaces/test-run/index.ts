import { ReportInterface } from 'interfaces/report';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TestRunInterface {
  id?: string;
  test_name: string;
  status: string;
  start_time: any;
  end_time?: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  report?: ReportInterface[];
  user?: UserInterface;
  _count?: {
    report?: number;
  };
}

export interface TestRunGetQueryInterface extends GetQueryInterface {
  id?: string;
  test_name?: string;
  status?: string;
  user_id?: string;
}
