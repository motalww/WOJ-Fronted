import ACCESS_ENUM from "@/access/AccessEnum";
import AccessEnum from "@/access/AccessEnum";

/**
 * 权限校验
 */
const checkAccess = (loginUser, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  //获取当前用户权限
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  //如果需要用户才能访问
  if (needAccess === ACCESS_ENUM.USER) {
    //用户未登录
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }
  //如需要管理员权限
  if (needAccess == AccessEnum.ADMIN) {
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;
