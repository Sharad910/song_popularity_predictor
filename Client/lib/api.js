export const sendData = async(data)=>fetch('/api/predict',{
    method: "POST",
    body: JSON.stringify(data),
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
    },

}).then((res)=>{
    return res;
})