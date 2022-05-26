import React from "react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import "./Movie.css";

export const View = ({ movies, deleteMovie }) => {
  console.log(movies);
  return movies.map((Movie) => (
    <tr key={Movie.id}>
      <td>{Movie.id}</td>
      <td>{Movie.name}</td>
      <td>{Movie.genre}</td>
      <td>{Movie.rating}</td>
      <td className="delete-btn" onClick={() => deleteMovie(Movie.id)}>
        <Icon icon={trash} />
      </td>
    </tr>
  ));
};
