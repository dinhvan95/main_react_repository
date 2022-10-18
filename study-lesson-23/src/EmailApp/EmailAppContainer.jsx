import React, { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getUsers } from "../helpers";
import HeaderEmailApp from "./components/HeaderEmailApp";
import MessageContainer from "./pages/MessagesContainer";

export default function EmailAppContainer() {
    const users = useMemo(() => getUsers(), []);
    const [userSelected, setUserSelected] = useState(users[0]);

    const onSelectedUser = (value) => { setUserSelected((pre) => (pre = value)); };
    // click vào một hàng trong bảng sẽ hiển thị thông tin bên dưới bao gồm:
    // subject
    // body
    // from
    // to
    return (
        <BrowserRouter>
            <HeaderEmailApp userSelected={userSelected} onSelectedUser={onSelectedUser} users={users} />
            <Routes>
                <Route path="./messages" element={<MessageContainer userSelected={userSelected} />}>Messages</Route>
                <Route path='/messages/finance' element={<MessageContainer userSelected={userSelected} />}></Route>
                <Route path='/messages/inbox' element={<MessageContainer userSelected={userSelected} />}></Route>
                <Route path='/messages/personal' element={<MessageContainer userSelected={userSelected} />}></Route>
                <Route path='/messages/spam' element={<MessageContainer userSelected={userSelected} />}></Route>
                <Route path='/messages/travel' element={<MessageContainer userSelected={userSelected} />}></Route>
                <Route path="./contacts">Contacts</Route>
                <Route path="./preferences">Preferences</Route>
            </Routes>
        </BrowserRouter>
    );
}