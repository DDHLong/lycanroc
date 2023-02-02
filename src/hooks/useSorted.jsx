import { useRole } from "../context/RoleProvider";
import { NamePriorityEnum } from "../enums/RoleEnum";

const useSorted = () => {
  const { players } = useRole();

  //find match role and compare the call order
  const CompareFn = (a, b) => {
    const firstItem = NamePriorityEnum.find((e) => e.roleName === a.role);
    const secondItem = NamePriorityEnum.find((e) => e.roleName === b.role);
    if (firstItem.order < secondItem.order) {
      return -1;
    }
    if (firstItem.order > secondItem.order) {
      return 1;
    }

    return 0;
  };

  const sortedPlayers = players;
  sortedPlayers.sort(CompareFn);

  return { sortedPlayers };
};

export default useSorted;
