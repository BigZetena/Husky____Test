import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  let navigate = useNavigate();
  return (
    <div className="bg-blue-900">
      <div className="max-w-lg mx-auto p-20 flex gap-8">
        <Link className="text-white" to="/">
          На главную
        </Link>
        <Link className="text-white" to="/contacts">
          Контакты
        </Link>
        <button onClick={() => navigate("/")}>На главную</button>
      </div>
    </div>
  );
};
