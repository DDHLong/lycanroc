import { NamePriorityEnum } from "../enums/RoleEnum";

const useAction = () => {
  const findAction = (player) => {
    const action = NamePriorityEnum.find(
      (n) => n.roleName === player.role
    ).action;
    return action;
  };

  //   const actionName = NamePriorityEnum.find(
  //     (n) => n.roleName === player.role
  //   ).action;

  return { findAction };
};

export default useAction;
