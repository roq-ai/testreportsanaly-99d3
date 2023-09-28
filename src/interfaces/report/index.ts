import { TestRunInterface } from 'interfaces/test-run';
import { BuildInterface } from 'interfaces/build';
import { GetQueryInterface } from 'interfaces';

export interface ReportInterface {
  id?: string;
  report_name: string;
  report_status: string;
  test_run_id: string;
  build_id: string;
  created_at?: any;
  updated_at?: any;

  test_run?: TestRunInterface;
  build?: BuildInterface;
  _count?: {};
}

export interface ReportGetQueryInterface extends GetQueryInterface {
  id?: string;
  report_name?: string;
  report_status?: string;
  test_run_id?: string;
  build_id?: string;
}
