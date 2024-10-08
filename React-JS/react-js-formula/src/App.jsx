import { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const fetchProfile = () => {
    fetch(
      "https://api.react-formula.com/learning-api/demos/teammates-project/profiles"
    )
      .then((response) => response.json())
      .then((data) => setProfiles(data));
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const profileCards = profiles.map((profile, idx) => (
    <ProfileCard key={idx} profile={profile} />
  ));
  return (
    <div className="flex justify-center bg-neutral-100 min-h-screen pb-8">
      <div className="w-full max-w-md mt-2">{profileCards}</div>
    </div>
  );
};

export default App;
