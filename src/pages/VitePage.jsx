

// Ленивая загрузка компонента

import UserProfile from "../components/UserProfile";


function VitePage() {
  return (
    <div>
      <h1>Привет, студент!</h1>
      {/* Suspense показывает <div>Загрузка...</div> пока UserProfile загружается */}
  
        <UserProfile />
  
    </div>
  );
}

export default VitePage;
