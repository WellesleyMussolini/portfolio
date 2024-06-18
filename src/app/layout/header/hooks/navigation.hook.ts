import { useContext } from "@/context/context";

export const useNavigation = () => {
  const { setChatVisibility } = useContext();

  const navigationOptionsMock = [
    { label: "Projects", onClick: () => console.log("oi"), route: "/projects" },
    { label: "Contact", onClick: () => setChatVisibility(true), route: "" },
  ];
  return {navigationOptionsMock};
};