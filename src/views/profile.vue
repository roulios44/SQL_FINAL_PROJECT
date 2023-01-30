<template>
    
<div class="card">
    <div class="card-details">
        <p class="text-title">Name : Mike</p>
        <p class="text-body">Surname : Smith</p>
        <p class="text-body"></p>
    </div>
    <button @click ="showModal = true"  class="card-button" >More Info</button>
    <div class ="popup">
        <div class="modal-background"> 
            <div class="modal-content">
            <h1>Modal Title</h1>
            <p>Modal Content</p>
            <button @click="showModal = false" class ="closePopup">Close</button>
        </div>
    </div>
</div>
</div>
</template>
<script>
export default {
    data() {
        return {
            showModal: false,
        }

    }
}
</script>

<style>
.card {
 width: 190px;
 height: 254px;
 border-radius: 20px;
 background: #f5f5f5;
 position: relative;
 padding: 1.8rem;
 border: 2px solid #c3c6ce;
 transition: 0.5s ease-out;
 overflow: visible;
}

.card-details {
 color: black;
 height: 100%;
 gap: .5em;
 display: grid;
 place-content: center;
}

.card-button {
 transform: translate(-50%, 125%);
 width: 60%;
 border-radius: 1rem;
 border: none;
 background-color: #008bf8;
 color: #fff;
 font-size: 1rem;
 padding: .5rem 1rem;
 position: absolute;
 left: 50%;
 bottom: 0;
 opacity: 0;
 transition: 0.3s ease-out;
}

.text-body {
 color: rgb(134, 134, 134);
}

/*Text*/
.text-title {
 font-size: 1.5em;
 font-weight: bold;
}

/*Hover*/
.card:hover {
 border-color: #008bf8;
 box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover .card-button {
 transform: translate(-50%, 50%);
 opacity: 1;
}
.popup{
    display: none;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
}
.modal-background {
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.705);
  z-index: 999;
}
.modal-content {
display: none;
  top: 5    0%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 1000;
}   
.closePopup{
    margin-top: 5%;
    margin-bottom: 5%;
    display: none;
    width: 10%;
    height: 5%;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    border: solid black;
}
</style>
