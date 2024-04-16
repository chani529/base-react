import axios from "axios";
import { HOST_URL, TEST_URL } from "./urls";

const instance = axios.create({
  // baseURL: HOST_URL,
  baseURL: TEST_URL,
});

/**
 * 응답 전 처리
 */
instance.interceptors.response.use(
  function (response) {
    // TODO CHECK :: BASE API 에 맞게 Response Data 및 Error 설정
    /*
      const { status, resultData } = response.data

      if( status == 'SUCCESS' ) return resultData

      const { resultStatus, resultMessage } = response.data

      return Promise.reject({ resultStatus, resultMessage })
    */

    return response.data;
  },
  function (error) {
    // TODO CHECK :: BASE API 에 맞게 Error 설정
    /*
      if( error.response.status == 401 ) {
        // TODO :: Refresh Token을 활용하여 Access Token 재발급 요청
        // 요청 성공
        (res) => {
          const token = res.get("TOKEN")
          axiosApplyConfig(token)

          return instance.request(error.config)
        }
        // 요청 실패
        (err) => {
          return Promise.reject({
            resultStatus : 'ERROR_STATUS',
            resultMessage : 'ERROR_MESSAGE'
          })
        }
      } else {
        return Promise.reject({
          resultStatus : error.config.status,
          resultMessage : error.message
        })
      }
    */

    console.log(`----------> ERROR RESPONSE : ${error.config.url}`);
    console.log(`----------> ERROR MESSAGE  : ${error.message}`);
    return Promise.reject(error);
  }
);

/**
 * 인증 이후 Request Header에 Token 설정
 * @param token : JWT TOKEN
 */
export const axiosApplyConfig = (token: string) => {
  if (!token) throw "Token is required";

  instance.defaults.headers.common["X-AUTH-TOKEN"] = token;
};

/**
 * 로그아웃 이후 Request Header에 Token 설정
 */
export const axiosClearAuthHeader = () => {
  delete instance.defaults.headers.common["X-AUTH-TOKEN"];
};

// TODO CHECK :: STATUS 별 Error 처리
export function handleNetworkError(status: number) {
  switch (status) {
    case 0:
      console.log("네트워크 연결 유실");
      break;
    case 401:
      console.log("401 인증 필요");
      break;
    case 403:
      console.log("403 권한 없음");
      break;
    case 404:
      console.log("404 잘못된 요청.");
      break;
    case 500:
      console.log("500 서버 에러");
      break;
    default: {
      if (status >= 500) {
        console.log("잘못된 요청입니다");
      }
    }
  }
}
export default instance;
