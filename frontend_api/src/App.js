import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListPost from './components/Post/ListPost';
import AddPost from './components/Post/AddPost';
import UpdatePost from './components/Post/UpdatePost';
import ReadPost from './components/Post/ReadPost';

import AddComment from './components/Comment/AddComment';
import UpdateComment from './components/Comment/UpdateComment';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            
            <Route path="/post/" element={<ListPost/>} />
            <Route path="/addpost/" element={<AddPost/>} />
            <Route path="/updatepost/:id" element={<UpdatePost/>} />
            <Route path="/post/:id" element={<ReadPost/>} />
            <Route path="/comment/:postId/comments" element={<AddComment/>} />
            <Route path="/Updatecomment/:id" element={<UpdateComment/>} />



          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}
export default App;