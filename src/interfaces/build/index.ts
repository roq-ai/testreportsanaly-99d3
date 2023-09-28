import { ReportInterface } from 'interfaces/report';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BuildInterface {
  id?: string;
  build_name: string;
  build_status: string;
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

export interface BuildGetQueryInterface extends GetQueryInterface {
  id?: string;
  build_name?: string;
  build_status?: string;
  user_id?: string;
}
