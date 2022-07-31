import React ,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./generalinfo.css"
import Header from "../header_sidebar/Header";
import Filebase64 from "react-file-base64";

function GeneralInfo(){
    let navigate = useNavigate();
    const [data, setdata]=useState({
        name:"",
        mobile:"",
        posted_by:"",
        sale_type:"",
        featured_package:"",
        ppd_package:"",
        image:""
    })

    const handlegeneral=(e)=>{
        e.preventDefault();
        localStorage.setItem('GENERAL_INFO', JSON.stringify(data));
        console.log(data)
        navigate("/locationinfo")

    }

    
    return(
        <>
        <hr></hr>
        <Header/>
        <div className="main_section">

<div className="heading_section">
        <h2>ADD NEW PROPERTY</h2>
</div>


<div className="nav_section">
<div className="navbar">
    <div className="nav_1">
    <div className="basic"><span className="oa">1</span><span>    Basic Info</span></div>

    </div>
    <div className="nav_2">
    <div className="property"><span className="oa">2</span><span>    Property Details</span></div>

    </div>
    <div className="nav_three">
    <div className="general"><span className="oa">3</span><span>    General Info</span></div>

    </div>
    <div className="nav_fou">
    <div className="loc"><span className="oa">4</span><span>Location Info</span></div>

    </div>
</div>

</div>
        

        <form className="generalinfo" onSubmit={handlegeneral}>

            <div className="box9">
            <div className="name">
            <lable for="name" id="name">Ownership</lable>
            <div>
            <select name="name" className="select9" onChange={e=>setdata({...data,name: e.target.value})}>
                <option value="" selected={true} disabled>Not selected yet</option>
                <option value="Owner">Owner</option>
                <option value="Self">Sellf</option>
                <option value="Family Member">Family Member</option>
            </select>
            </div>
            </div>

            <div className="mob">
                <label for="mobile">Mobile</label>
                <div>
                    <input className="mobile" placeholder="Enter Mobile Number" onChange={e=>setdata({...data,mobile: e.target.value})}></input>
                </div>
            </div>
            </div>

            <div className="box10">
            <div className="postedby">
            <lable for="post" id="post">Posted By</lable>
            <div>
            <select name="post" className="select10" onChange={e=>setdata({...data,posted_by: e.target.value})}>
                <option value="" selected={true} disabled>Not selected yet</option>
                <option value="Self">Sellf</option>
                <option value="Family Member">Family Member</option>
            </select>
            </div>
            </div>

            <div className="saletype">
            <lable for="sale" id="sale">Sale Type</lable>
            <div>
            <select name="sale" className="select11" onChange={e=>setdata({...data,sale_type: e.target.value})}>
                <option value="" selected={true} disabled>Not selected yet</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </div>
            </div>
            </div>

            <div className="box11">
            <div className="Featured Package">
            <lable for="pack" id="pack">Featured Packages</lable>
            <div>
            <select name="pack" className="select12" onChange={e=>setdata({...data,featured_package: e.target.value})}>
                <option value="" selected={true} disabled>Not selected yet</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </div>
            </div>

            <div className="ppd-Package">
            <lable for="ppd" id="ppd">PPD Packages</lable>
            <div>
            <select name="ppd" className="select13" onChange={e=>setdata({...data,ppd_package: e.target.value})}>
                <option value="" selected={true} disabled>Not selected yet</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            </div>
            </div>
            </div>
            
            <div className="image">
                <label for="image"></label>
                {/* <div><label for="upload">#</label> */}
                <div className="upload_box">
                <Filebase64
                        id="upload"
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setdata({ ...data,image: base64 })}
                />
                
                </div>
            </div>

            <Link to="/propertydeatils"><button className="prev2">Previous</button></Link>
            <button className="save2" type="submit">Save & Continue</button>
                

        </form>

            </div>

        
        </>

    )
}

export default GeneralInfo;