import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [loomVideo, setLoomVideo] = useState(0);
  const [classList, setClassList] = useState("list-hide");
  const [user, setUser] = useState({
    name: "John Doe",
    course: -1,
  });

  const videos = [
    {
      title: "video 01",
      url: "https://www.loom.com/embed/60ec2f5c18fa4576b8dd0bd59eb02a34",
      comments: [
        { name: "Gabriel", comment: "This is a comment" },
        { name: "Fernando", comment: "Video Top" },
      ],
    },
    {
      title: "video 02",
      url: "https://www.loom.com/embed/9f5183473ba74c3aaa3a6fa557054718",
      comments: [],
    },
    {
      title: "video 03",
      url: "https://www.loom.com/embed/1d9a969717f543d8894ee5d0f7cab4e8",
      comments: [],
    },
  ];

  const onClickSetVideo = (video: number) => {
    console.log(video);
    setLoomVideo(video);
    if (video > user.course) {
      setTimeout(() => {
        setUser((prevUser) => ({ ...prevUser, course: video }));
      }, 1000);
    }
  };

  const onClickModule = () => {
    if (classList === "list-hide") {
      setClassList("list");
    } else {
      setClassList("list-hide");
    }
  }

  return (
    <>
      <div className="container">
        <iframe
          className="video"
          src={videos[loomVideo].url}
          title="Loom 01"
        ></iframe>
        <div className="accordions">
          <div className="accordion-item">

            <div onClick={onClickModule} className="module">Modulo 1</div>

            <ul className={classList}>
              {videos.map((video, index) => (
                <li className="listItem">
                  <button onClick={() => onClickSetVideo(index)}>
                    {video.title}
                  </button>
                  <input
                    type="checkbox"
                    name="watched"
                    id="01"
                    checked={index <= user.course}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <br />
      </div>
      <div className="comments">
        <h2>Comentarios</h2>
        {videos[loomVideo].comments &&
          videos[loomVideo].comments.map((comment, index) => (
            <div className="comment" key={index}>
              <h1> {comment.name}</h1>
              <p> {comment.comment}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
