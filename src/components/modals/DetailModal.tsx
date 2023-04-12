import SEO from "../SEO";
import URLModal from "./URLModal";

const DetailModal = ({ title, description }: { title: string; description: string }) => {
  return (
    <URLModal>
      <SEO title={title} description={`test ${description}`} />

      <h3 className="font-bold text-3xl">{title}</h3>
    </URLModal>
  );
};

export default DetailModal;
