const API_KEY = "MASUKKAN_API_KEY_BARU_DI_SINI";

async function sendMessage(){

const input=document.getElementById("message");
const chat=document.getElementById("chat");

const text=input.value.trim();

if(!text) return;

chat.innerHTML+=`<div class="msg user">${text}</div>`;

input.value="";

const res=await fetch("https://openrouter.ai/api/v1/chat/completions",{
method:"POST",
headers:{
"Authorization":"Bearer "+API_KEY,
"Content-Type":"application/json"
},
body:JSON.stringify({
model:"deepseek/deepseek-r1:free",
messages:[
{
role:"user",
content:text
}
]
})
});

const data=await res.json();

chat.innerHTML+=`<div class="msg ai">${data.choices[0].message.content}</div>`;

chat.scrollTop=chat.scrollHeight;

}
