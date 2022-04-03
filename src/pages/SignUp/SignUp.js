import React, {useState} from "react";
import {Link } from "react-router-dom";

function SignUp(){
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [passwordCheck,setPasswordCheck]=useState('');
    const [birthday,setBirthday]=useState('');
    const [gender,setGender]=useState('');
    const [homeCode,setHomeCode]=useState('');
    const onChangeEmail = (e)=>{
        setEmail(e.target.value);
    };
    const onChangeName = (e)=>{
        setName(e.target.value);
    };
    const onChangePassword = (e)=>{
        setPassword(e.target.value);
    };
    const onChangePasswordCheck = (e)=>{
        setPasswordCheck(e.target.value);
    };
    const onChangeBirthday = (e)=>{
        setBirthday(e.target.value);
    };
    const onChangeGender =(e)=>{
        setGender(e.target.value);
    };
    const onChangeHomeCode =(e)=>{
        setHomeCode(e.target.value);
    };

    // const onSubmit = async (e)=>{
    //     e.preventDefault();
    //     signupEmail(email.value, password.value) //
    //         .then((result) => {
    //             const user = result.user;
    //             //loginSuccess(user.email, user.uid);
    //         })
    //         .catch((error) => console.log(error));
    // };
    return(
        <div id="container">
            <header>
                <Link to="/">NeighBe</Link>
            </header>
            <form>
                <label id="email-label">
                    <span>이메일 주소</span>
                    <div>
                        <input type="email" id="email" name="email" value={email} onChange={onChangeEmail}/>
                    </div>
                </label>
                <label id="name-label">
                    <span>닉네임</span>
                    <div>
                        <input type="text" id="name" name="name" value={name} onChange={onChangeName}/>
                    </div>
                </label>
                <label id="password-label">
                    <span>비밀번호</span>
                    <div>
                        <input type="password" id="password" name="password" value={password} onChange={onChangePassword}/>
                    </div>
                </label>
                <label id="passwordCheck-label">
                    <span>비밀번호 확인</span>
                    <div>
                        <input type="password" id="password-check" name="password-check" value={passwordCheck} onChange={onChangePasswordCheck}/>
                    </div>
                </label>
                <label id="birthday-label">
                    <span>생일</span>
                    <div>
                        <input type="date" id="birthday" name="birthday" value={birthday} onChange={onChangeBirthday}/>
                    </div>
                </label>
                <label id="gender-label">
                    <span>성별</span>
                    <div>
                        <input type="radio" id="gender" name="gender" value="male" onChange={onChangeGender}/>남자
                        <input type="radio" id="gender" name="gender" value="female" onChange={onChangeGender}/>여자
                    </div>
                </label>
                <label id="my-homeCode-label">
                    <span>집주소</span>
                    <div>
                        <input type="text" id="homeCode" name="homeCode" value={homeCode} onChange={onChangeHomeCode}/>
                    </div>
                </label>
                <button type="submit">회원가입</button>
            </form>
        </div>

    );
}

export default SignUp;