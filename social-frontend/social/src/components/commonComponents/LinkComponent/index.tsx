import LinkIcon from "../../../images/Library/LinkIcon.png";
import FileIcon from "../../../images/Library/FileIcon.png";
const LinkComponent: React.FC<{ url: string; isDoc: boolean }> = ({
  url,
  isDoc,
}) => {
  return (
    <a href={url} target="blank">
      <img
        src={isDoc ? FileIcon : LinkIcon}
        alt=""
        style={{
          height: "24px",
          width: "24px",
          objectFit: "contain",
        }}
      />
    </a>
  );
};

export default LinkComponent;
