import React from "react";
import "./Address.css";

function Address({ note, onAddressChange }) {
  const editNote = (note) => {
    onAddressChange(note);
  };
  return (
    <div className="address-box">
      <div className="addressStrip-base-title">
        <div className="addressStrip-base-addressName">
          Deliver to:
          <span className="addressStrip-base-highlight">{note.name}</span>
        </div>
      </div>
      {note.isEditing ? (
        <>
          <textarea
            rows="10"
            type="text"
            className="text-area"
            value={note.address}
            onChange={(e) => {
              note.address = e.target.value;
              editNote(note);
            }}
          />
          <br />
          <button
            type="button"
            className="adjust-button button"
            onClick={() => {
              note.isEditing = false;
              editNote(note);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <div className="addressStrip-base-subText">{note.address}</div>
          <br />
          <button
            type="button"
            className="adjust-button button"
            onClick={() => {
              note.isEditing = true;
              editNote(note);
            }}
          >
            Change Address
          </button>
        </>
      )}
    </div>
  );
}

export default Address;
