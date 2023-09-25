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
    if (isLoading) return;
    setIsloading(true);
    try {
      await dispatch(getTodoList()).unwrap();
    } catch (e) {
      console.log(e);
    }
    setIsloading(false);
  };
  // const handleFileChange = (file)=>{
    //     const form = new FormData()
  //     form.append('File',file)
  //     axios.post()
  // }
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(30);
  const totalPages = Math.ceil(todosList.length / recordsPerPage);
  const pageCount = [...Array(totalPages).keys()];
  const lastIndexTodo = currentPage * recordsPerPage;
  const firstIndexTodo = lastIndexTodo - recordsPerPage;
  const visibleTodos = todosList.slice(firstIndexTodo,lastIndexTodo)
  // const filteredTodos = useMemo(() => {
  //   const lowerSearchValue = searchedValue.toLowerCase();
  //   return visibleTodos.filter((filteredData) =>
  //     filteredData.title.toLowerCase().includes(lowerSearchValue)
  //   );
  // }, [todosList, searchedValue]);
  return (
    <div className="px-2 py-4">
      {isLoading ? (
        <div className="text-center">
          <CircularProgress color="primary" />
        </div>
      ) : (
        <div>
          {/* <input type="file" accept=".png ,.jpeg , .jpg" onChange={(e)=>handleFileChange(e.target.files)}/> */}
          <div className="flex justify-center gap-1">
            <TextField
              variant="outlined"
              onChange={(e) => setSearchedValue(e.target.value)}
              label="Search"
              size="small"
            />
          </div>
          <div className="flex justify-between items-center pa-1">
            <span>{todosList.length} Records were found</span>
            <span>
              {firstIndexTodo + 1}-{lastIndexTodo} Page {currentPage}
            </span>
          </div>
          <div
            className={`pa-1 grid  cursor-pointer ${
              visibleTodos.length ? "grid-cols-4" : "grid-cols-1"
            } gap-1`}
          >
            {visibleTodos.length ? (
              visibleTodos.map((todo) => (
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
          <div className="flex items-center px-2 gap-1 w-full justify-end">
            <Button variant="contained" disabled={currentPage === 0} onClick={() => setCurrentPage((oldVal) => oldVal + -1)}>
              Previous
            </Button>
            {pageCount.map((pageIndex) => (
              <div
                key={pageIndex}
                onClick={()=>setCurrentPage(pageIndex +1)}
                className={`text-center w-8 p-1 rounded-md cursor-pointer bg-gray-200 ${currentPage === pageIndex && 'bg-blue-500 text-white'}`}
              >
                {pageIndex + 1}
              </div>
            ))}
            <Button
              variant="contained"
              disabled={currentPage === pageCount.length -1}
              onClick={() => setCurrentPage((oldVal) => oldVal + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
export default AdminHome;
