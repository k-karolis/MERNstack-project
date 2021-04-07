import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {
      exercises: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/exercises/`)
      .then((response) => {
        this.setState({ exercises: response.data });
        console.log("Data fetched and stored in state.");
      })
      .catch((error) => {
        console.log("Error " + error);
      });
  }

  deleteExercise(id) {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  render() {
    return (
      <div>
        <h1>Exercises list</h1>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          {Object(this.state.exercises).map((currentexercise) => (
            <tbody key={currentexercise._id}>
              <tr>
                <td>{currentexercise.username}</td>
                <td>{currentexercise.description}</td>
                <td>{currentexercise.duration}</td>
                <td>{currentexercise.date.substring(0, 10)}</td>
                <td>
                  <Link to={"/edit/" + currentexercise._id}>Edit</Link> |
                  <button
                    href='#'
                    onClick={() => this.deleteExercise(currentexercise._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}
