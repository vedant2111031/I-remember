import React from "react";
import { useRef, useState, useEffect } from "react";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let password = localStorage.getItem("password");
    if (password) {
      setpasswordArray(JSON.parse(password));
    }
  }, []);

  const showPassword = () => {
    passwordRef.current.type = "password";
    if (ref.current.src.includes("/icon/eye.png")) {
      ref.current.src = "/icon/hide.png";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "/icon/eye.png";
      passwordRef.current.type = "password";
    }
  };

  const savePassword = () => {
    setpasswordArray([...passwordArray, form]);
    localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
    console.log(form);
  };
  const handelChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };



  const copyText=(t)=>{
    navigator.clipboard.writeText(t)
  }

  return (
    <>
      <div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
        </div>
      </div>

      <div className="max-w-4xl myContainer">
        <h1 className="text-center font-bold text-xl">
          <span className="text-blue-400">I-</span>
          <span className="text-blue-600">rem</span>
          <span className="text-blue-800">ember</span>
        </h1>
        <h2 className="text-center text-blue-600 text-xl">
          To manage your passwords efficiently
        </h2>
        <div className="text-black flex flex-col p-4 gap-5 items-center">
          <input
            value={form.site}
            onChange={handelChange}
            placeholder="Enter the URL"
            className="rounded-full border border-blue-300 w-full p-2"
            type="text"
            name="site"
            id=""
          />
          <div className="flex w-full gap-5">
            <input
              value={form.username}
              onChange={handelChange}
              placeholder="Enter Username"
              className="rounded-full border border-blue-300 w-full p-2 py-1"
              type="text"
              name="username"
              id=""
            />
            <div className="relative">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handelChange}
                placeholder="Enter Password"
                className="rounded-full border border-blue-300 w-full p-2 py-1"
                type="password"
                name="password"
                id=""
              />
              <span
                className="absolute right-0 top-2 cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  src="/icon/eye.png"
                  alt="eye"
                  width={19}
                  className="mx-1"
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex bg-blue-300 rounded-full w-fit justify-center items-center p-2 hover:bg-blue-200"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add
          </button>
        </div>
        <div className="passwords">
          <h1 className="font-bold text-xl py-4 text-center text-blue-900">
            Your Passwords
          </h1>

          {passwordArray.length == 0 && <div>No Password Saved</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-xl overflow-hidden">
              <thead className="bg-blue-300">
                <tr>
                  <th className="py-3 text-blue-800">Site</th>
                  <th className="py-3 text-blue-800">Username</th>
                  <th className="py-3 text-blue-800">Password</th>
                </tr>
              </thead>
              <tbody className="bg-blue-200">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center  py-2 bottom-2 border border-white">
                        <div className="flex justify-center">
                        <a href="{item.site}" target="_blank">
                          {item.site}
                        </a>
                        <img
                          className="mx-2 size-5 my-1 cursor-pointer"
                          onClick={()=>{copyText(item.site)}}
                          src="/icon/copy.png"
                          alt="copy"
                        />
                        </div>
                      </td>

                      <td className="py-2 bottom-2 border border-white">
                        <div className="flex justify-center">
                      <a href="{item.username}" target="_blank">
                          {item.username}
                        </a> <img
                        onClick={()=>{copyText(item.username)}}
                          className="mx-2 size-5 my-1 cursor-pointer"
                          src="/icon/copy.png"
                          alt="copy"
                        />
                        </div>
                      </td>
                      <td className="py-2 bottom-2 border border-white">
                        <div className="flex justify-center">
                      <a href="{item.site}" target="_blank">
                          {item.password}
                        </a> <img
                        onClick={()=>{copyText(item.password)}}
                          className="mx-2 size-5 my-1 cursor-pointer"
                          src="/icon/copy.png"
                          alt="copy"
                        />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
