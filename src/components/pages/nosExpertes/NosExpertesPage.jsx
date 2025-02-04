// src/components/NosExpertes.js
import React, { useEffect, useState } from "react";
import { getTeam } from "../../../api/team";


const NosExpertes = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {

    const fetchTeamData = async () => {
      const teamData = await getTeam();
      if (teamData && teamData.members) {
        setMembers(teamData.members);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <div>
      <h2>Notre équipe</h2>
      {members.length > 0 ? (
        <ul>
          {members.map((member, index) => (
            <li key={index}>
              <strong>{member.name}</strong>: {member.role}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun membre trouvé.</p>
      )}
    </div>
  );
};

export default NosExpertes;
