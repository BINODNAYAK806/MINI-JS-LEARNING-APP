//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.


var Scope = ["In JavaScript, objects and functions are also variables" ,"Scope determines the accessibility of variables, objects, and functions from different parts of the code","JavaScript has 3 types of scope:"]
var Hoisting = ["JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions","Hoisting allows functions to be safely used in code before they are declared.","Variable and class declarations are also hoisted, so they too can be referenced before they are declared. Note that doing so can lead to unexpected errors, and is not generally recommended." ]
var cons = ["The constructor method is a special method of a class for creating and initializing an object instance of that class.","A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object."]
var prototypes = ["Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.","Every object in JavaScript has a built-in property, which is called its prototype"]

localStorage.setItem("Scope",JSON.stringify(Scope));
localStorage.setItem("Hoisting",JSON.stringify(Hoisting));
localStorage.setItem("constructor",JSON.stringify(cons));
localStorage.setItem("prototypes",JSON.stringify(prototypes));
localStorage.setItem("vid","./video/JS TOPIC EXPLANATION.mp4")


document.getElementById("s1").addEventListener("click", scope);
document.getElementById("s2").addEventListener("click", hoisting);
document.getElementById("s3").addEventListener("click", constructor);
document.getElementById("s4").addEventListener("click", prototype);
var vidlink = localStorage.getItem("vid")
var scopeobj = localStorage.getItem("Scope")
var savedscope = JSON.parse(scopeobj)

var Hoistingobj = localStorage.getItem("Hoisting")
var savedhost = JSON.parse(Hoistingobj)

var constructorobj = localStorage.getItem("constructor")
var savedconstructor = JSON.parse(constructorobj)

var prototypesobj = localStorage.getItem("prototypes")
var savedprototypes = JSON.parse(prototypesobj)
// console.log(savedhost)

// console.log(savedscope)
function scope(){

    for(let i=0;i<savedscope.length; i++){
        
        // var ma = document.createElement("ul",{ is : 'expanding-list' })
        var ul=document.createElement('ul');


        var sa = document.createElement("li")
        sa.innerHTML = savedscope[i]
        ul.append(sa)
    
        // let expandingList = document.createElement('ul', { is : 'expanding-list' })
        document.getElementById("scope").appendChild(ul)
    }
}

    function hoisting(){

        for(let i=0;i<savedhost.length; i++){
            
            // var ma = document.createElement("ul",{ is : 'expanding-list' })
            let ul=document.createElement('ul');
    
    
            let sa = document.createElement("li")
            sa.innerHTML = savedhost[i]
            ul.append(sa)
        
            // let expandingList = document.createElement('ul', { is : 'expanding-list' })
            document.getElementById("hoistion").appendChild(ul)
        }       
   

    }
    function constructor(){

        for(let i=0;i<savedconstructor.length; i++){
            
            // var ma = document.createElement("ul",{ is : 'expanding-list' })
            let ul=document.createElement('ul');
    
    
            let sa = document.createElement("li")
            sa.innerHTML = savedconstructor[i]
            ul.append(sa)
        
            // let expandingList = document.createElement('ul', { is : 'expanding-list' })
            document.getElementById("const").appendChild(ul)
        }       
   

    }
    function prototype(){

        for(let i=0;i<savedprototypes.length; i++){
            
            // var ma = document.createElement("ul",{ is : 'expanding-list' })
            let ul=document.createElement('ul');
    
    
            let sa = document.createElement("li")
            sa.innerHTML = savedprototypes[i]
            ul.append(sa)
        
            // let expandingList = document.createElement('ul', { is : 'expanding-list' })
            document.getElementById("prototype").appendChild(ul)

        }     
        
        
   

    }
