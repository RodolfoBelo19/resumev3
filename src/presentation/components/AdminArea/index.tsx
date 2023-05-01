import { NavbarAdmin } from "./NavbarAdmin";
import { useSetColorHeader } from "@/presentation/hooks/useSetColorHeader";

export const AdminArea = () => {
  const { colorHeader } = useSetColorHeader();

  return (
    <>
      <NavbarAdmin isScrollY={colorHeader} />
      
      <div className="flex justify-around pt-20 mx-auto max-w-7xl h-screen px-2 sm:px-6 lg:px-8">
        <div className="h-screen">
          <li>About</li>
          <li>Career</li>
          <li>Skill</li>
          <li>Footer</li>
        </div>
        <div>
          <div>content about</div>
          <div>content career</div>
          <div>content skill</div>
          <div>content footer</div>
        </div>
      </div>
    </>
  );
};
