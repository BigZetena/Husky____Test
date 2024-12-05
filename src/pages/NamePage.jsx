import { useLoaderData, useParams } from "react-router-dom";

const NamePage = () => {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data);
  console.log(id);
  //   function findUser() {
  //     const user = data.find((e) => e.id + "" === id);
  //     if (user) {
  //       return user.name;
  //     } else {
  //       return "Пользователь не найден";
  //     }
  //   }
  return (
    <div>
      <h2 className="text-3xl text-red-700">Наш супер крутой чел:</h2>
      <p className="text-xl">{data[1].name}</p>
    </div>
  );
};

export default NamePage;
