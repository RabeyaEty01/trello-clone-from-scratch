import axios from "axios";

export const fetchBoardDetails = async (id) => {
  const request = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/board/list/${id}`);
  console.log(request);
  return request.data
};
