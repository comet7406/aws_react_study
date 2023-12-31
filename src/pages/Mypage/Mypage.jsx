/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef, useState } from 'react';
import * as S from './Styles.js';



function Mypage(props) {
    const defaultProfileImgSrc = "https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg";
    
    const profileImgSrc = localStorage.getItem("profileImg");

    const[ profileImg, setProfileImg ] = useState(!!profileImgSrc ? profileImgSrc : defaultProfileImgSrc);
    
    const profileFileInput = useRef();

    const localStorageUser = JSON.parse(localStorage.getItem("user"));

    let user = {
        username: localStorageUser?.username && localStorageUser.username,
        name: localStorageUser?.name && localStorageUser.name,
        email: localStorageUser?.email && localStorageUser.email
    }

    const handleProfileImgChangeClick = () => {
        profileFileInput.current.click();
    }

    const handleProfileImgSelect = (e) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            setProfileImg(e.target.result);
            console.log(profileImg);
        }

        reader.readAsDataURL(e.target.files[0]);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        user = {
            ...user,
            [name]: value
        }
    }

    const handleSaveClick = () => {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("profileImg", profileImg);
    }

    // useEffect(() => {
        
    // }, [])

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SProfileImgBox} onClick={handleProfileImgChangeClick}>

                    <img css={S.SProfileImg} src={profileImg} />
                    
                    <input css={S.SFileHidden} type="file" ref={profileFileInput} onChange={handleProfileImgSelect} />
                </div>
            </div>
            <div css={S.SContainerBottom}>
                <div css={S.SUsername}>
                    <label htmlFor="username">사용자명 </label>
                    <input type="text" id='username' name="username" onChange={handleInputChange} defaultValue={user.username}/>
                </div>
                <div css={S.SName}>
                    <label htmlFor="name">이름 </label>
                    <input type="text" id='name' name="name" onChange={handleInputChange} defaultValue={user.name}/>
                </div>
                <div css={S.SEmail}>
                    <label htmlFor="email">E-mail </label>
                    <input type="text" id='email' name="email" onChange={handleInputChange} defaultValue={user.email}/>
                </div>
                <div>
                    <button css={S.SButton} onClick={handleSaveClick}>SAVE</button>
                </div>
            </div>
        </div>
    );
}

export default Mypage;