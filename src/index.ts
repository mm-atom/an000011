import moment from 'moment';

/**
 * 获取某天的开始时间
 * @param time 时间戳
 */
export default function start_day(time: string, format: string): number;
export default function start_day(time: number): number;
export default function start_day(time: number | string, format?: string) {
	return moment(time, format).startOf('day').valueOf();
}
