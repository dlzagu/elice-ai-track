import "./App.css";

function Board(props) {
  const isAdmin = false;
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.title}</h1>
      <User name={props.user.name} profile_image={props.user.profile_image} />
      {isAdmin ? <button>수정 </button> : null}
    </div>
  );
}

function User(props) {
  return (
    <div>
      <img src={props.profile_image} alt=""></img>
      <p>{props.name}</p>
    </div>
  );
}

const contents = [
  {
    title: "게시글 입니다 1",
    color: "red",
    user: {
      name: "dlzagu",
      profile_image: "https://placeimg.com/32/32/any",
    },
  },
  {
    title: "게시글 입니다 2",
    color: "blue",
    user: {
      name: "dlzagu",
      profile_image: "https://placeimg.com/32/32/any",
    },
  },
  {
    title: "게시글 입니다 3",
    color: "yellow",
    user: {
      name: "dlzagu",
      profile_image: "https://placeimg.com/32/32/any",
    },
  },
];

function App() {
  return (
    <div>
      {contents.map((content) => {
        return (
          <Board
            title={content.title}
            color={content.color}
            user={content.user}
          />
        );
      })}
    </div>

    // <div>
    //   <Mycomponent user={{ name: "elice" }} color="blue">
    //     <div>Hello</div> {/*children을 가리킴*/}
    //   </Mycomponent>
    // </div>
  );
}
// const Mycomponent = (props) => {
//   const { user, color, children } = props;
//   return (
//     <div style={{ color }}>
//       <p>{user.name}님의 하위 element는!</p>
//       {children}
//     </div>
//   );
// };
export default App;
