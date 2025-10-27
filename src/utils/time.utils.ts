import { IAuthData } from '@/store/auth/types';

export abstract class TimeUtils {
  static compareAuthTime(item: IAuthData<unknown>) {
    const compare = Date.now() - item.timestamp;
    return compare >= item.expire;
  }
}