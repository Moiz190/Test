import React, { useEffect, useMemo, useState } from "react";
import { getTodoList } from "../../store/slice/admin/adminHome";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
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
  const visibleTodos = todosList.slice(firstIndexTodo, lastIndexTodo);
  const filteredTodos = useMemo(() => {
    const lowerSearchValue = searchedValue.toLowerCase();
    return visibleTodos.filter((filteredData) =>
      filteredData.title.toLowerCase().includes(lowerSearchValue)
    );
  }, [visibleTodos, searchedValue]);
  return (
    <div className="px-2 py-3 h-[calc(100vh_-_56px)] overflow-auto">
      {isLoading ? (
        <div className="text-center">
          <CircularProgress color="primary" />
        </div>
      ) : (
        <div>
          {/* <input type="file" accept=".png ,.jpeg , .jpg" onChange={(e)=>handleFileChange(e.target.files)}/> */}
          <div className="grid grid-cols-3 items-center">
            <div></div>
            <TextField
              variant="outlined"
              onChange={(e) => setSearchedValue(e.target.value)}
              label="Search"
              size="small"
            />
            <div className="flex justify-end">
              <FormControl className="w-36">
                <InputLabel id="demo-simple-select-label">
                  Records Per Page
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  value={recordsPerPage}
                  label="Select Records Per Page"
                  onChange={(e) => setRecordsPerPage(e.target.value)}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                  <MenuItem value={40}>40</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="flex justify-between items-center pa-1">
            <span>{todosList.length} Records were found</span>
            <span>
              Records: {firstIndexTodo + 1}-
              {lastIndexTodo > todosList.length
                ? todosList.length
                : lastIndexTodo}
            </span>
          </div>
          <div className="h-[calc(100vh_-_230px)] overflow-auto mb-4">
            <div
              className={`pa-1 grid cursor-pointer ${
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
          <div className="flex items-center px-2 w-full justify-between">
            <span>Page {currentPage}</span>
            <div className="flex gap-1">
              <Button
                variant="contained"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((oldVal) => oldVal + -1)}
              >
                Previous
              </Button>
              {pageCount.map((pageIndex) => (
                <div
                  key={pageIndex}
                  onClick={() => setCurrentPage(pageIndex + 1)}
                  className={`text-center w-10 flex justify-center items-center rounded-md cursor-pointer bg-gray-200 ${
                    currentPage === pageIndex + 1 && "!bg-blue-500 text-white"
                  }`}
                >
                  {pageIndex + 1}
                </div>
              ))}
              <Button
                variant="contained"
                disabled={currentPage === pageCount.length}
                onClick={() => setCurrentPage((oldVal) => oldVal + 1)}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AdminHome;
