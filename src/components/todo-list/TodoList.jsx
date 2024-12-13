import React, { useEffect, useState } from "react";
import "./style.scss";
import user from "../../assets/images.png";
import user2 from "../../assets/user2.png";

function TodoList() {
  let arr = [user, user2];
  let random = Math.floor(Math.random() * arr.length);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [prefession, setPrefession] = useState("");
  const [edit, setEdit] = useState(null);

  console.log(lname);

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  console.log(fname);
  let hendleCreateTodo = (e) => {
    e.preventDefault();

    // if (
    //   fname === "" ||
    //   lname === "" ||
    //   age === "" ||
    //   gender === "" ||
    //   prefession === ""
    // ) {
    //   return alert("Please enter");
    // }

    if (
      !fname.trim() ||
      !lname.trim() ||
      !age.trim() ||
      !gender.trim() ||
      !prefession.trim()
    ) {
      alert("To'ldiring");
      return null;
    }

    if (edit) {
      //update
      let editTodo = {
        id: edit.id,
        fname,
        lname,
        age,
        gender,
        prefession,
      };
      setData((prev) =>
        prev.map((item) => (item.id === edit.id ? editTodo : item))
      );
      setEdit(null);
    } else {
      let todos = {
        fname,
        lname,
        age,
        gender,
        prefession,

        id: new Date().getTime(),
      };
      console.log(todos);
      setData([...data, todos]);
    }
    resetForm();
  };

  let handleDelete = (id) => {
    // let todo1 = document.querySelector(".todo-item");
    // todo1.remove();
    //bu yoldan ham foydalansa bo'ladi;
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  //   let handleEdit = () => {
  //     //1-usul
  //     // let name = prompt("name");
  //     // let lastname = prompt("lastname");
  //     // let age = prompt("age");
  //     // let gender = prompt("gender");
  //     // let prefession = prompt("prefession");
  //     // let datas = {
  //     //   fname: name,
  //     //   lname: lastname,
  //     //   age: age,
  //     //   gender: gender,
  //     //   prefession: prefession,
  //     // };
  //     // console.log(datas);
  //     //setData([datas]);
  //   };

  let handleEdit = (todo) => {
    setEdit(todo);
    console.log(todo);
    setFname(todo.fname);
    setLname(todo.lname);
    setAge(todo.age);
    setGender(todo.gender);
    setPrefession(todo.prefession);
  };

  let resetForm = () => {
    setFname("");
    setLname("");
    setAge("");
    setGender("");
    setPrefession("");
  };

  let imgs = [
    {
      img: "data:image/jpeg;base64,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",
    },
    {
      img: "data:image/png;base64,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",
    },
  ];
  //////////////////////
  return (
    <div className="todo">
      <header>
        <form onSubmit={hendleCreateTodo} action="">
          <input
            value={fname}
            onChange={(event) => setFname(event.target.value)}
            type="text"
            placeholder="firstname"
          />
          <input
            value={lname}
            onChange={(event) => setLname(event.target.value)}
            type="text"
            placeholder="lastname"
          />
          <input
            value={age}
            onChange={(event) => setAge(event.target.value)}
            type="text"
            placeholder="age"
          />
          <input
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            type="text"
            placeholder="gender"
          />
          <input
            value={prefession}
            onChange={(event) => setPrefession(event.target.value)}
            type="text"
            placeholder="prefession"
          />
          <button className="text-white" type="submit">
            {edit ? "Update" : "Create"}{" "}
          </button>
        </form>
      </header>
      <main>
        {data?.map((todo) => (
          <div key={todo.id} className="todo-item">
            <div className="img">
              {/* <img src={user} alt="" /> */}
              <img src={arr[random]} alt="" />
            </div>

            <div className="todolist">
              <h2 className="text-stone-950">{todo.fname}</h2>
              <h3 className="text-gray-700">{todo.lname}</h3>
              <h3 className="text-gray-700">{todo.age} </h3>
              <h3 className="text-gray-700">{todo.gender}</h3>
              <h3 className="text-gray-700">{todo.prefession}</h3>
              <div className="btns">
                <button
                  className="text-white"
                  onClick={() => handleDelete(todo.id)}
                >
                  {" "}
                  Delete
                </button>
                <button
                  className="text-white"
                  id="edit"
                  onClick={() => handleEdit(todo)}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default TodoList;
