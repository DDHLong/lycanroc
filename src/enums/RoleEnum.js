import { doNothing, foreseer, protect, witchKill, witchRevived, wolfKill } from "../action/action";

export const RoleNameEnum = {
  Protector: "Bảo vệ",
  Werewolf: "Sói",
  Seer: "Tiên tri",
  Witch: "Phù thuỷ",
  Villager: "Dân làng",
};

export const NamePriorityEnum = [
  {roleName: "Bảo vệ", order: 3, action: protect},
  {roleName: "Sói", order: 4, action: wolfKill},
  {roleName: "Tiên tri", order: 5, action: foreseer},
  {roleName: "Phù thuỷ", order: 6, action: [witchKill, witchRevived]},
  {roleName: "Dân làng", order: 1000, action: doNothing},
];
