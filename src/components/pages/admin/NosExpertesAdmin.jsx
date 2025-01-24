// src/components/NosExpertesAdmin.js
import React, { useEffect, useState } from "react";
import { getTeam, setTeam } from "../../../api/team";


const NosExpertesAdmin = () => {
    const [members, setMembers] = useState([]);
    const [editingMember, setEditingMember] = useState(null);
    const [editedData, setEditedData] = useState({ name: "", role: "" });

    useEffect(() => {
        const fetchTeamData = async () => {
            const teamData = await getTeam();
            if (teamData && teamData.members) {
                setMembers(teamData.members);
            }
        };

        fetchTeamData();
    }, []);

    const handleEdit = (index) => {
        setEditingMember(index);
        setEditedData({
            name: members[index].name,
            role: members[index].role,
        });
    };

    const handleChange = (e) => {
        setEditedData({
            ...editedData,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedMembers = [...members];
        updatedMembers[editingMember] = { ...updatedMembers[editingMember], ...editedData };

        await setTeam({ members: updatedMembers });

        setMembers(updatedMembers);
        setEditingMember(null);
        setEditedData({ name: "", role: "" });
    };

    return (
        <div className="admin-container">
            <h2 className="admin-title">Page d'administration</h2>
            <h3 className="admin-subtitle">Équipe</h3>
            <ul className="member-list">
                {members.map((member, index) => (
                    <li key={index} className="member-item">
                        <strong>{member.name}</strong>: {member.role}
                        <button className="edit-button" onClick={() => handleEdit(index)}>
                            Modifier
                        </button>
                    </li>
                ))}
            </ul>
            {editingMember !== null && (
                <div className="edit-form-container">
                    <h4 className="edit-title">Modifier {members[editingMember].name}</h4>
                    <form className="edit-form" onSubmit={handleUpdate}>
                        <div className="form-group">
                            <label>Nom:</label>
                            <input
                                type="text"
                                name="name"
                                value={editedData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Rôle:</label>
                            <input
                                type="text"
                                name="role"
                                value={editedData.role}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="update-button">
                            Mettre à jour
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default NosExpertesAdmin;
