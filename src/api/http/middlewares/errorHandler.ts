import type { AxiosError } from 'axios';
import type { HTTPMiddleware } from 'src/api/types/http';
import { ElNotification } from 'element-plus';

/**
 * 错误捕获器中间件
 *
 * 负责提示报错信息
 */
const errorHandler: HTTPMiddleware = function (_config, next) {
  return next().catch((e: AxiosError) => {
    let title = '错误';
    if (e.response) {
      // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
      title = `${e.code} ${e.config?.url}`;
    } else if (e.request) {
      // 请求已经成功发起，但没有收到响应
      title = `未响应 ${e.config?.url}`;
    } else {
      // 发送请求时出了点问题
      title = '请求发送失败';
    }
    ElNotification.error({
      title,
      message: e.message,
    });

    throw e;
  });
};

export default errorHandler;
