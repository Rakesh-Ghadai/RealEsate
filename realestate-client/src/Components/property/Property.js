import React from "react";
import { useState,useEffect} from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { useNavigate } from 'react-router-dom'
>>>>>>> main
import {debounce} from "lodash";
import { BsSearch } from "react-icons/bs";
import {BiShow,BiPencil} from "react-icons/bi"
import {FaImages} from "react-icons/fa";
import axios from "axios";
import { Cookies } from 'react-cookie';
import Header from "../header_sidebar/Header";
import Sidebar from "../header_sidebar/Sidebar";
import './Property.css'

const Property = () =>{
    const [value,setValue]= useState("");
    const [users,setUsers]= useState([]);
    const cookies = new Cookies()
    const token = cookies.get('jwt')
    let navigate = useNavigate();

    // const [dataval,setDataval]=useState("")

    
    const deb= debounce((text)=>{
        setValue(text);
    },1000);

    const onChange=(e)=>{
        const text= e.target.value;
        // setDataval(text);
        // console.log(e.target.elements.searchtext.value);
        deb(text);
    }

    const onSearch = (searchTerm)=>{
        console.log(searchTerm);

            axios.get("http://localhost:5000/signupuser")
            .then(res=>{
                let post =res.data.property;
                console.log(post);
                const result= post.filter((val)=>val.email===(searchTerm));
                console.log(...result);

                setUsers(result);
                console.log(users);

            }).catch(err=>{
                console.log(err)
            })
       
    }

    
    useEffect(()=>{
        const afterLogin = async ()=>{
            try{
                const res = await axios({
                    method: 'get',
                    url:"http://localhost:5000/user/property",
                    headers: {
                        Accept : "application/json",
                        authorization: token,
                        "Content-Type": "application/json"
                      }, 
                      credentials: "include"
                })
                console.log(res)
            }catch(err){
                console.log(err)
                if(err.response.data === "Unauthorized user" || err.response.data === undefined || err.response.status === 409){
                    navigate("/")
    
                }
            
                // console.log(err)
                // console.log(err.response.data === "Unauthorized user")
    
            }
        }

        afterLogin()
        
        
        // console.log(`Cookie from property page => ${token}`)
        //axios.get("https://instaclone-10x-app.herokuapp.com/user")
        // axios.get("http://localhost:5000/signupuser")
        // .then(res=>{
        //     setUsers(res.data.property)
        //     console.log(res.data)
        //     // console.log(res.data.property.email)

        // }).catch(err=>{
        //     console.log(err)
        // })
    },[token, navigate])
    // value,
    return(
        <>
            {/* <hr></hr> */}
                <Header/>
                <Sidebar/>
            <div className="row_search_bar">
                <div className="boxContainer">
                    <table className="elementsContainer">
                        <tr>
                            <td>
                                     <input type="text" placeholder="Search PPD ID" className="search" name="searchtext" onChange={onChange}/>
                            </td>
                            
                            <td><span className="stand">|</span></td>

                            <td>
                                     <button className="search_btn" onClick={()=> onSearch(value)}><BsSearch className="search_icon"/></button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <Link to="/basicinfo"> <div className="button_div">
            <button className="btn_add"><span className="plus">+</span><span className="text_btn">Add Property</span></button>          
            </div>
            </Link>
            <div className="main_row">
                <p className="head_column_one">PPDID</p>
                <p className="head_column_two">Image</p>
                <p className="head_column_three">Property</p>
                <p className="head_column_four">Contact</p>
                <p className="head_column_five">Area</p>
                <p className="head_column_six">Views</p>
                <p className="head_column_seven">Status</p>
                <p className="head_column_eight">DaysLeft</p>
                <p className="head_column_nine">Action</p>
            </div>

            {[...users].map((user)=>{
                return(
                    <div className="property_row">
                    <p className="property_column_one">PPD1234</p>
                    <p className="property_column_two"><FaImages className="image"/></p>
                    <p className="property_column_three">Plot</p>
                    <p className="property_column_four">8748959678</p>
                    <p className="property_column_five">1290</p>
                    <p className="property_column_six">03</p>
                    <p className="property_column_seven"><button className="btn">Sold</button></p>
                    <p className="property_column_eight">10</p>
                    <p className="property_column_nine"><BiShow className="show"/><BiPencil className="edit"/></p>
                </div>
                )
            })}

           
            {/* {[...users].map((user)=>{
                return(
                    <div> {user.email} </div>
                )
            })} */}
                
            
        </>
    )
}

export default Property;
