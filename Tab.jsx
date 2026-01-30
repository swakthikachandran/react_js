
import React,{useState} from"react";
function Tab(){
    const [activeTab,setActivateTab]=useState("home");
    return(
        <div style={StyleSheet.container}>
            <h2>Tab Navigation Example</h2>
            {/*Tab Buttons*/}
            <div style={StyleSheet.tabContainer}>
                <button
                style={activeTab === "home" ? StyleSheet.activeBtn : StyleSheet.btn}
                onClick={()=> setActivateTab("home")}
                >
                    Home
                </button>
                <button
                style={activeTab === "about" ? StyleSheet.activeBtn : StyleSheet.btn}
                onClick={()=> setActivateTab("about")}
                >
                    About
                </button>
                <button
                style={activeTab === "contact" ? StyleSheet.activeBtn : StyleSheet.btn}
                onClick={()=> setActivateTab("contact")}
                >
                    Contact
                </button>
               
            </div>
            {/* Conditional Content*/}
            <div style={StyleSheet.contentBox}>
                {activeTab === "home"&&(
                    <p>Welcome to the Home tab! This is the homepage content.</p>
                )}
                {activeTab === "about"&&(
                    <p>We are learning react js</p>
                )}
                {activeTab === "contact"&&(
                    <p>Contact: ct-b@kgcas.com</p>

                )}
               
            </div>
        </div>
    );

}
const styles={
    container:{
      textAlign:"center",
      padding:"20px",
      fontFamily:"Arial",

    },
    tabContainer:{
        marginBottom:"20px",

    },
    btn:{
        padding:"10px",
        margin:"5px",
        cursor:"pointer",
        background:"pink",
        border:"1px black",
    },
    activeBtn:{
        padding:"10px 20px",
        margin:"5px",
        cursor:"pointer",
        background:"pink",
        color:"white",
        border:"1px solid #3e8e41",
        borderRadius:"5px",
    },
    contentBox:{
        padding:"20px",
        border:"1px solid #ccc",
        width:"300px",
        margin:"0 auto",
        borderRadius:"5px",
        background:"#f9f9f9",
    },

};
export default Tab