import { Link } from "react-router-dom";
const SectionTitle = ({ section, linkto }: { section: string, linkto:string }) => {
  return (
    <div>
      <Link to={linkto}>
        <a className="text-2xl text-slate-200 hover:text-yellow-500">{section}</a>
      </Link>
    </div>
  );
};

export default SectionTitle;
