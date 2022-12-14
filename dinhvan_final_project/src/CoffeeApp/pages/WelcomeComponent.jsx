import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageComponent from "../components/ImageComponent";
import '../css/CoffeeApp.css';
import selected_table from '../image/selected_table.png';
import unselected_table from '../image/unselected_table.png';

export default function WelcomeComponent() {
    const ErrorText = styled.div`
    color : red;
    text-align : start;
`;

    const [isShowSignIn, setIsShowSignIn] = useState(false);
    const [isShowSignUp, setIsShowSignUp] = useState(false);
    const [isSubmitLogin, setIsSubmitLogin] = useState(false);
    const [isSubmitSignUp, setIsSubmitSignUp] = useState(false);
    const [isShowCoffeeTable, setIsShowCoffeeTable] = useState(false);
    const [isValidLogin, setIsValidLogin] = useState(false);
    const [fnameSignUp, setFnameSignUp] = useState("");
    const [lnameSignUp, setLnameSignUp] = useState("");
    const [birthdaySignUp, setBirthdaySignUp] = useState("");
    const [usernameSignUp, setUsernameSignUp] = useState("");
    const [pwSignUp, setPwSignUp] = useState("");
    const [rePwSignUp, setRePwSignUp] = useState("");
    const [usernameSignIn, setUsernameSignIn] = useState("");
    const [pwSignIn, setPwSignIn] = useState("");
    const [inforSignUp, setInforSignUp] = useState([
        {
            fnameInfor: "",
            lnameInfor: "",
            birthdayInfor: "",
            usernameInfor: "admin",
            passwordInfor: "12345",
        }
    ])
    const [errorValidLogin, setErrorValidLogin] = useState({
        isInValidLogin: false,
        messageInValidLogin: "",
    })
    const [errorSignUp, setErrorSignUp] = useState({
        isErrorFName: false,
        isErrorLName: false,
        isErrorBirthDay: false,
        isErrorUsername: false,
        isErrorPw: false,
        isErrorRePw: false,
        messageErrorFName: "",
        messageErrorLName: "",
        messageErrorBirthday: "",
        messageErrorUsername: "",
        messageErrorPw: "",
        messageErrorRePw: "",
    })
    const rowTable = [1,2,3,4,5];
    const columnTable = [1,2,3,4,5];
    const [errorSignIn, setErrorSignIn] = useState({
        isErrorUsernameSignIn: false,
        isErrorPwSignIn: false,
        messageErrorUsernameSignIn: "",
        messageErrorPwSignIn: ""
    })
    useEffect(() => {
        if (!isValidLogin) {
            return setErrorValidLogin(
                (pre) => (
                    pre = {
                        ...pre,
                        isInValidLogin: true,
                        messageInValidLogin: "T??n ????ng nh???p ho???c m???t kh???u kh??ng ch??nh x??c"
                    }
                )
            );
        }
        return setErrorValidLogin(
            (pre) => (
                pre = {
                    ...pre,
                    isInValidLogin: false,
                    messageInValidLogin: ""
                }
            )
        );
    })
    useEffect(() => {
        if (!fnameSignUp.trim().length) {
            return setErrorSignUp(
                (pre) => (
                    pre = {
                        ...pre,
                        isErrorFName: true,
                        messageErrorFName: "Vui l??ng nh???p h???",
                    }
                )
            );
        }
        return setErrorSignUp(
            (pre) => (
                pre = {
                    ...pre,
                    isErrorFName: false,
                    messageErrorFName: "",
                }
            )
        )
    }, [fnameSignUp, isSubmitSignUp])
    useEffect(() => {
        if (!lnameSignUp.trim().length) {
            return setErrorSignUp(
                (pre) => (
                    pre = {
                        ...pre,
                        isErrorLName: true,
                        messageErrorFName: "Vui l??ng nh???p t??n",
                    }
                )
            );
        }
        return setErrorSignUp(
            (pre) => (
                pre = {
                    ...pre,
                    isErrorLName: false,
                    messageErrorLName: "",
                }
            )
        )
    }, [lnameSignUp, isSubmitSignUp])
    useEffect(() => {
        if (!birthdaySignUp.trim().length) {
            return setErrorSignUp(
                (pre) => (
                    pre = {
                        ...pre,
                        isErrorBirthDay: true,
                        messageErrorBirthday: "Vui l??ng nh???p ng??y th??ng n??m sinh",
                    }
                )
            );
        }
        return setErrorSignUp(
            (pre) => (
                pre = {
                    ...pre,
                    isErrorBirthDay: false,
                    messageErrorBirthday: "",
                }
            )
        )
    }, [birthdaySignUp, isSubmitSignUp])
    useEffect(() => {
        if (!usernameSignUp.trim().length) {
            return setErrorSignUp(
                (pre) => (
                    pre = {
                        ...pre,
                        isErrorUsername: true,
                        messageErrorUsername: "Vui l??ng nh???p t??n ????ng nh???p",
                    }
                )
            );
        }
        return setErrorSignUp(
            (pre) => (
                pre = {
                    ...pre,
                    isErrorUsername: false,
                    messageErrorUsername: "",
                }
            )
        )
    }, [usernameSignUp, isSubmitSignUp])
    useEffect(() => {
        if (!pwSignUp.trim().length) {
            return setErrorSignUp(
                (pre) => (
                    pre = {
                        ...pre,
                        isErrorPw: true,
                        messageErrorPw: "Vui l??ng nh???p m???t kh???u",
                    }
                )
            );
        }
        return setErrorSignUp(
            (pre) => (
                pre = {
                    ...pre,
                    isErrorPw: false,
                    messageErrorPw: "",
                }
            )
        )
    }, [pwSignUp, isSubmitSignUp])
    useEffect(() => {
        if (!rePwSignUp.trim().length) {
            return setErrorSignUp(
                (pre) => (
                    pre = {
                        ...pre,
                        isErrorRePw: true,
                        messageErrorRePw: "Vui l??ng nh???p m???t kh???u",
                    }
                )
            );
        }
        if (rePwSignUp.trim() !== pwSignUp.trim()) {
            return setErrorSignUp(
                (pre) => (
                    pre = {
                        ...pre,
                        isErrorRePw: true,
                        messageErrorRePw: "Nh???p l???i m???t kh???u kh??ng ch??nh x??c"
                    }
                )
            );
        }
        return setErrorSignUp(
            (pre) => (
                pre = {
                    ...pre,
                    isErrorRePw: false,
                    messageErrorRePw: "",
                }
            )
        )
    }, [rePwSignUp, isSubmitSignUp])
    useEffect(() => {
        if (!usernameSignIn.trim().length) {
            return setErrorSignIn(
                (pre) => (
                    pre = {
                        ...pre,
                        isErrorUsernameSignIn: true,
                        messageErrorUsernameSignIn: "Vui l??ng nh???p t??n ????ng nh???p",
                    }
                )
            );
        }
        return setErrorSignIn(
            (pre) => (
                pre = {
                    ...pre,
                    isErrorUsernameSignIn: false,
                    messageErrorUsernameSignIn: "",
                }
            )
        )
    }, [usernameSignIn, isSubmitLogin])
    useEffect(() => {
        if (!pwSignIn.trim().length) {
            return setErrorSignIn(
                (pre) => (
                    pre = {
                        ...pre,
                        isErrorPwSignIn: true,
                        messageErrorPwSignIn: "Vui l??ng nh???p m???t kh???u",
                    }
                )
            );
        }
        return setErrorSignIn(
            (pre) => (
                pre = {
                    ...pre,
                    isErrorPwSignIn: false,
                    messageErrorPwSignIn: "",
                }
            )
        )
    }, [pwSignIn, isSubmitLogin])
    const forwardSignInComponent = () => {
        setIsShowSignIn(true);
        setIsShowSignUp(false);
    }
    const forwardSignUpComponent = () => {
        setIsShowSignUp(true)
        setIsShowSignIn(false);
    }
    const confirmSignup = () => {
        if (!errorSignUp.isErrorFName && !errorSignUp.isErrorLName && !errorSignUp.isErrorBirthDay &&
            !errorSignUp.isErrorUsername && !errorSignUp.isErrorPw && !errorSignUp.isErrorRePw) {
            setIsShowSignIn(true);
            setIsShowSignUp(false);
            setIsSubmitSignUp(true);
            setInforSignUp([...inforSignUp, { fnameInfor: fnameSignUp, lnameInfor: lnameSignUp, birthdayInfor: birthdaySignUp, usernameInfor: usernameSignUp, passwordInfor: pwSignUp }])
        }
        setIsSubmitSignUp(true);
    }
    const confirmSignin = () => {
        if (!errorSignIn.isErrorUsernameSignIn && !errorSignIn.isErrorPwSignIn) {
            console.log("inforSignUp", inforSignUp)
            const findAccount = inforSignUp.find((val) =>
                val.usernameInfor == usernameSignIn && val.passwordInfor == pwSignIn
            )
            console.log("findAccount", findAccount);
            if (findAccount.length !== 0) {
                setIsValidLogin(true)
            } else {
                setIsValidLogin(false)
            }
        }
        if (isValidLogin) {
            setIsShowCoffeeTable(true);
            setIsSubmitLogin(true);
        }
        setIsSubmitLogin(true);
    }
    return (
        <div className="container">
            {isShowCoffeeTable ?
                <div>
                    <h1>
                        Giao di???n b??n coffee
                    </h1>
                    <div className="w-100">
                        {
                            rowTable.map((row, index) => (
                                <div key={index} className="d-flex flex-row w-100">
                                    {
                                        columnTable.map((col, i) => (
                                            <a key={5*index + col} href = "#" className="d-flex flex-column m-5 link_table"><b className="link_table">{5*index + col}</b><ImageComponent url={unselected_table} alt="unselected table" /></a>
                                        ))
                                    }
                                </div>
                            )
                        )}
                    </div>
                </div> :
                <div>
                    {isShowSignUp ?
                        <div className="signInContainer d-flex justify-content-start flex-column">
                            <h1>????ng k??</h1>
                            <form className="justify-content-start">
                                <div class="form-group formContainer d-flex flex-row">
                                    <div className="w-25">
                                        <label for="usernameId">H???</label>
                                        <input type="text" onChange={(e) => setFnameSignUp((pre) => (pre = e.target.value))} className="form-control" id="usernameId" placeholder="Nh???p h???" />
                                        {errorSignUp.isErrorFName && isSubmitSignUp && (
                                            <ErrorText className='form-text danger'>
                                                {errorSignUp.messageErrorFName}
                                            </ErrorText>
                                        )}
                                    </div>
                                    <div className="w-25">
                                        <label for="usernameId">T??n</label>
                                        <input type="text" onChange={(e) => setLnameSignUp((pre) => (pre = e.target.value))} className="form-control" id="usernameId" placeholder="Nh???p t??n" />
                                        {errorSignUp.isErrorLName && isSubmitSignUp && (
                                            <ErrorText className='form-text danger'>
                                                {errorSignUp.messageErrorLName}
                                            </ErrorText>
                                        )}
                                    </div>
                                    <div class="w-25">
                                        <label for="usernameId">Ng??y th??ng n??m sinh</label>
                                        <input type="text" onChange={(e) => setBirthdaySignUp((pre) => (pre = e.target.value))} className="form-control" id="usernameId" placeholder="Nh???p ng??y th??ng n??m sinh" />
                                        {errorSignUp.isErrorBirthDay && isSubmitSignUp && (
                                            <ErrorText className='form-text danger'>
                                                {errorSignUp.messageErrorBirthday}
                                            </ErrorText>
                                        )}
                                    </div>
                                </div>
                                <div class="form-group formContainer">
                                    <label for="usernameId">T??n ????ng nh???p</label>
                                    <input type="text" onChange={(e) => setUsernameSignUp((pre) => (pre = e.target.value))} className="form-control" id="usernameId" placeholder="Nh???p t??n ????ng nh???p" />
                                    {errorSignUp.isErrorUsername && isSubmitSignUp && (
                                        <ErrorText className='form-text danger'>
                                            {errorSignUp.messageErrorUsername}
                                        </ErrorText>
                                    )}
                                </div>
                                <div className="form-group formContainer">
                                    <label for="passwordId">M???t kh???u</label>
                                    <input type="password" onChange={(e) => setPwSignUp((pre) => (pre = e.target.value))} className="form-control" id="passwordId" placeholder="Nh???p m???t kh???u" />
                                    {errorSignUp.isErrorPw && isSubmitSignUp && (
                                        <ErrorText className='form-text danger'>
                                            {errorSignUp.messageErrorPw}
                                        </ErrorText>
                                    )}
                                </div>
                                <div class="form-group formContainer">
                                    <label for="usernameId">Nh???p l???i m???t kh???u</label>
                                    <input type="password" onChange={(e) => setRePwSignUp((pre) => (pre = e.target.value))} className="form-control" id="usernameId" placeholder="Nh???p l???i m???t kh???u" />
                                    {errorSignUp.isErrorRePw && isSubmitSignUp && (
                                        <ErrorText className='form-text danger'>
                                            {errorSignUp.messageErrorRePw}
                                        </ErrorText>
                                    )}
                                </div>
                                <div className="form-group formContainer">
                                    <button type="button" className="btn btn-primary" onClick={() => confirmSignup()}>????ng k??</button><br /><br />
                                    <a href="#" onClick={() => forwardSignInComponent()}>???? c?? t??i kho???n</a>
                                </div>
                            </form>
                        </div> :
                        isShowSignIn ?
                            <div className="signInContainer d-flex justify-content-start flex-column">
                                <h1>????ng nh???p</h1>
                                <form className="justify-content-start">
                                    <div class="form-group formContainer">
                                        <label for="usernameId">T??n ????ng nh???p</label>
                                        <input type="text" onChange={(e) => setUsernameSignIn((pre) => (pre = e.target.value))} className="form-control" id="usernameId" placeholder="Nh???p t??n ????ng nh???p" />
                                        {errorSignIn.isErrorUsernameSignIn && isSubmitLogin && (
                                            <ErrorText className='form-text danger'>
                                                {errorSignIn.messageErrorUsernameSignIn}
                                            </ErrorText>
                                        )}
                                    </div>
                                    <div className="form-group formContainer">
                                        <label for="passwordId">M???t kh???u</label>
                                        <input type="password" onChange={(e) => setPwSignIn((pre) => (pre = e.target.value))} className="form-control" id="passwordId" placeholder="Nh???p m???t kh???u" />
                                        {errorSignIn.isErrorPwSignIn && isSubmitLogin && (
                                            <ErrorText className='form-text danger'>
                                                {errorSignIn.messageErrorPwSignIn}
                                            </ErrorText>
                                        )}
                                    </div>
                                    <div className="form-group formContainer">
                                        <button type="button" onClick={() => confirmSignin()} className="btn btn-primary">????ng nh???p</button><br /><br />
                                        {errorValidLogin.isInValidLogin && isSubmitLogin && (
                                            <ErrorText className='form-text danger'>
                                                {errorValidLogin.messageInValidLogin}
                                            </ErrorText>
                                        )}
                                        <a href="#" onClick={() => forwardSignUpComponent()}>Ch??a c?? t??i kho???n</a>
                                    </div>
                                </form>
                            </div> :
                            <div className="welcomeContainer justify-content-center">
                                <h1>Ch??o m???ng b???n ?????n v???i ???ng d???ng qu???n l?? c?? ph??</h1>
                                <button type="button" className="btn btn-primary" onClick={() => forwardSignInComponent()}>Ti???p t???c</button>
                            </div>
                    }
                </div>
            }
        </div>
    );
}