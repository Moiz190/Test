import React, { useEffect, useMemo, useState } from "react";
import { getTodoList } from "../../store/slice/admin/adminHome";
import { useDispatch, useSelector } from "react-redux";
import { Button, CircularProgress, TextField } from "@mui/material";
export const AdminHome = () => {
  const dispatch = useDispatch();
  const todosList = useSelector((state) => state.adminHome.todo);
  const [searchedValue, setSearchedValue] = useState("");
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    fetchList();
  }, []);
  const fetchList = async () => {
    if (isLoading) return
    setIsloading(true)
    try {
      await dispatch(getTodoList()).unwrap();
    } catch (e) {
      console.log(e);
    }
    setIsloading(false)
  };
  const filteredTodos = useMemo(
    (e) => {
      const lowerSearchValue = searchedValue.toLowerCase();
      return todosList.filter((filteredData) =>
        filteredData.title.toLowerCase().includes(lowerSearchValue)
      );
    },
    [todosList, searchedValue]
  );
  const handleFileChange = (file)=>{
      const form = new FormData()
      form.append('File',file)
      axios.post()

  }
  return (
    <div className="px-2 py-4">
      {isLoading ? (
        <div className="text-center"><CircularProgress color="primary" /></div>
      ) : (
        <div>
          <input type="file" accept=".png ,.jpeg , .jpg" onChange={(e)=>handleFileChange(e.target.files)}/>
          <div className="flex justify-center gap-1">
            <TextField
              variant="outlined"
              onChange={(e) => setSearchedValue(e.target.value)}
              label="Search"
              size="small"
            />
          </div>
          <div
            className={`pa-1 grid  cursor-pointer ${
              filteredTodos.length ? "grid-cols-4" : "grid-cols-1"
            } gap-1`}
          >
            {filteredTodos.length ? (
              filteredTodos.map((todo) => (
                <div
                  key={todo?.id}
                  className="bg-slate-200 transition duration-300 hover:-translate-y-1 rounded-md flex flex-col p-3"
                >
                  <span>Id: {todo?.id}</span>
                  <span>Title: {todo?.title}</span>
                  <span className="mt-auto">
                    Status: {todo?.completed ? "true" : "false"}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-center">
                <span>There is nothing to show</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default AdminHome;
