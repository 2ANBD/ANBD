import React from "react";
// import { useState } from "react";
import "../scss/Style.scss";
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';

const Search = () => {;
    return(
        <>
            <div className="search_form_wrap">
                <form className="search_form">
                    <div className="search_input">
                        <label htmlFor="user_search" className="ir_so">품목 검색</label>
                        <input id="user_search" name="user_search" className="search" placeholder="구매하고 싶은 상품을 검색하세요" />
                        <button className="search_btn"><SearchOutlined style={{fontSize: "16px"}}/></button>
                    </div>
                    <button className="close_btn"><CloseOutlined /></button>
                </form>
            </div>
        </>
    );
}
export default Search;