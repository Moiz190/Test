import React, { useEffect } from "react";
import { getTodoList } from "../../store/slice/admin/adminHome";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
export const AdminHome = () => {
  const dispatch = useDispatch();
  const todosList = useSelector((state) => state.adminHome.todo);
  useEffect(() => {
    fetchList();
  }, []);
  const fetchList = async () => {
    try {
      await dispatch(getTodoList()).unwrap();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="px-2 py-4">
      <div className="flex justify-center gap-1">
        <TextField variant="outlined" label='Search' size="small" />
        <Button color="primary" size="large">Search</Button>
        <Button color="error" size="large">Reset</Button>
      </div>
      <div className="pa-1 grid grid-cols-4 gap-1">
        {todosList.map((todo) => (
          <div
            key={todo?.id}
            className="bg-slate-200 rounded-md flex flex-col p-3"
          >
            <span>Id: {todo?.id}</span>
            <span>Title: {todo?.title}</span>
            <span className="mt-auto">
              Completed Status: {todo?.completed ? "true" : "false"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdminHome;
