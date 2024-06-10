import UseIsMobile from "../isMobile";

const CopyRight = () => {
  const isMobile = UseIsMobile();

  return (
    <div>
      Copyright © {new Date().getFullYear()} {!isMobile && "Osman ORDU"}
    </div>
  );
};

export default CopyRight;
