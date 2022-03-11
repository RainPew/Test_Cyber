import React, { useEffect } from "react"
import {Link} from 'react-router-dom';
import { fetchGetHome } from "./getuser/action";
import { useSelector, useDispatch } from "react-redux";;
export default function Home(){
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(fetchGetHome())},[])
  const loading = useSelector((state) => {
return state.getHomeReducer.loading});
  const error = useSelector((state) => {
    return state.getHomeReducer.err;
  });
  const success = useSelector((state) => {
    return state.getHomeReducer.data;
  });
    return <div>
<table className="table mt-3">
  <thead>
        <Link className="btn btn-danger btnDetail" to='/detail'>Thêm Người Dùng</Link>
    <tr className="bg-primary" >
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">Họ và tên</th>
      <th scope="col">Mã loại người dùng</th>
      <th scope="col">Tài khoản</th>
      <th scope="col">Mật khẩu</th>
      <th scope="col">Số đt</th>
    </tr>
  </thead>
  <tbody>
        {
            success&&success.content.map((item,index)=>{
                    return <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{item.email}</td>
                    <td>{item.hoTen}</td>
                    <td>{item.maLoaiNguoiDung}</td>
                    <td>{item.taiKhoan}</td>
                    <td>{item.matKhau}</td>
                    <td>{item.soDt}</td>
                  </tr>
                })
        }
  </tbody>
</table>
  {error && (
          <div className="alert alert-danger" role="alert">
            {error?.response?.data?.content}
          </div>
        )}

    </div>
}