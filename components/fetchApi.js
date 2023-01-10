import {
  Button,
  ButtonContainer,
  Input,
  InputContiner,
  Paragraph,
  SearchButton,
  Wrapper,
} from "./fetchApi.styles";
import { useState, useEffect } from "react";

export default function FetchApi() {
  const [users, setUsers] = useState([]);
  const [showData, setshowData] = useState([]);
  const [startDataIndex, setStartDataIndex] = useState(0);
  const [endDataIndex, setEndDataIndex] = useState(10);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setUsers(data);
  }

  function searchItems(searchValue) {
    setSearchInput(searchValue);
    if (searchInput != "") {
      const filteredData = users.filter((item) => {
        return item.title.toLowerCase().includes(searchValue.toLowerCase());
      });

      setFilteredData(filteredData);
    }
  }

  function nextButtonClick() {
    if (endDataIndex + 10 < users.length) {
      setStartDataIndex((p) => p + 10);
      setEndDataIndex((p) => p + 10);
    } else if (users.length - endDataIndex >= 1) {
      setStartDataIndex((p) => p + 10);
      setEndDataIndex(users.length);
    }
  }
  function prevButtonClick() {
    if (startDataIndex - 10 >= 0) {
      setStartDataIndex((p) => p - 10);
      setEndDataIndex((p) => p - 10);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (users.length) {
      setshowData(users.slice(startDataIndex, endDataIndex));
    }
  }, [startDataIndex, users, endDataIndex]);

  return (
    <Wrapper>
      <InputContiner>
        <Input
          placeholder="Search"
          onChange={(e) => searchItems(e.target.value)}
        />
      </InputContiner>
      <Paragraph>
        {filteredData?.length >= 1
          ? filteredData?.map((items) => <li>{JSON.stringify(items)}</li>)
          : showData?.map((items) => <li>{JSON.stringify(items)}</li>)}
      </Paragraph>
      <ButtonContainer>
        <Button onClick={() => prevButtonClick()}>prev</Button>
        <Button onClick={() => nextButtonClick()}>next</Button>
      </ButtonContainer>
    </Wrapper>
  );
}
