import { Link } from "react-router-dom";

export const ContactItem = ({ name, surname, id }) => {
    return (
        <Link to={id}>
            <div className=" bg-slate-500 rounded-3xl p-6 font-serif mt-8 text-white">
                <p className="text-2xl">Имя:{name}</p>
                <p className="text-xl">Фамилия:{surname}</p>
            </div>
        </Link>
    );
};
