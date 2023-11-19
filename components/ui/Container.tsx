import { ChildrenProps } from "../../utils/interfaces";

const Container: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="max-w-[1920px] mx-auto xl:px-20 md:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
