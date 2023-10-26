/* Card.css */

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-500px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.agentName {
  box-sizing: border-box;
  border: 3px solid rgb(168, 48, 48);
  padding: 30px;
  background: linear-gradient(45deg, rgba(173, 157, 157, 0.5), rgba(145, 40, 40, 0.5), rgba(173, 157, 157, 0.5));
  border-radius: 30px;
  animation: fadeIn 0.3s forwards;
}

.agent-card {
    box-sizing: border-box;
    border: 3px solid rgb(168, 48, 48);
    padding: 30px;
    background-size: cover; /* ensure the background image covers the card */
    background-repeat: no-repeat; /* prevent the background image from repeating */
    background-position: center; /* center the background image */
    background: linear-gradient(45deg, rgba(173, 157, 157, 0.5), rgba(145, 40, 40, 0.5), rgba(173, 157, 157, 0.5));
    border-radius: 30px;
    display: flex;
    flex-direction: start; /* stack children vertically */
    justify-content: space-evenly; /* space out the children */
    align-items: center;
    height: 100%;
    animation: fadeIn 0.3s forwards;
  }

  .abilities-card, .description-card, .role-card{
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    border: 3px solid rgb(168, 48, 48);
    padding: 5px;
    background-size: cover; /* ensure the background image covers the card */
    background-repeat: no-repeat; /* prevent the background image from repeating */
    background-position: center; /* center the background image */
    background: linear-gradient(45deg, rgba(173, 157, 157, 0.5), rgba(145, 40, 40, 0.5), rgba(173, 157, 157, 0.5));
    border-radius: 30px;
  }

  .agent-portait {
    width: 400px;  /* or whatever size you prefer */
    height: 800px;
    object-fit: cover; /* ensures the image covers the area without distortion */
    object-position: center; /* centers the image within the frame */
    border-radius: 30px;
    border: 3px solid rgb(67, 163, 200);
    margin-right: 10px
  }


.agent-role {
   /* set a specific height, adjust as needed */
  width: 500px;
  overflow: hidden; /* hide excess text */
}

.ability-details {
 overflow: hidden; /* hide excess text */
 display: flex;
 margin-right: 50px
}

.ability-icon {
  width: 75px;  /* or whatever size you prefer */
  height: 75px;
  object-fit: cover; /* ensures the image covers the area without distortion */
  object-position: center; /* centers the image within the frame */
  border-radius: 30px;
  border: 3px solid rgb(168, 48, 48);
}

.agent-details {

  align-content: center;
  border-radius: 30px;
  /* border: 3px solid rgb(168, 48, 48); */
}

.agent-details-button {
    align-self: center; /* center the button horizontally */
    margin-top: auto; /* push the button to the bottom */
}

  /* Text Background */
  .role-description, .agent-role, .ability-name, .ability-description  {
  background-color: rgba(26, 15, 15, 0.5); /* black with 50% opacity */
  padding: 5px; /* giving a little space around the text */
  border-radius: 5px; /* optional, to give rounded corners */
  border: 3px solid rgb(67, 163, 200);
}

/* Text Color */
.role-description, .agent-role, .ability-name, .ability-description {
  color: #40b2e3;
}

/* Text Shadow */
.role-description, .agent-role, .ability-name, .ability-description {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

/* Font Weight & Size */

.role-description, .agent-role, .ability-name, .ability-description  {
  font-size: 1.1em;
}

/* Line Spacing */
.role-description, .agent-role, .ability-name, .ability-description  {
  line-height: 1.4;
}

h2 {
  color: rgb(241, 61, 61);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.ability-slots {
  margin: 6px
}

@media (min-width: 375px) {
  .agent-card{
    width: 375px;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .agent-portait {
    width: 270px;  /* or whatever size you prefer */
    height: 400px;
    object-fit: cover; /* ensures the image covers the area without distortion */
    object-position: center; /* centers the image within the frame */
    border-radius: 30px;
    border: 3px solid rgb(67, 163, 200);
    margin-bottom: 10px
  }

  .agent-details {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ability-icon {
    width: 45px;  /* or whatever size you prefer */
    height: 45px;
    object-fit: cover; /* ensures the image covers the area without distortion */
    object-position: center; /* centers the image within the frame */
    border-radius: 30px;
    border: 3px solid rgb(168, 48, 48);
  }

  .ability-details {
     /* hide excess text */
    display: flex;
    flex-direction: column;
    
   }

   .description-card, .role-card{
    max-width: 200px;
    height: auto;
  }

  .agent-role, .role-description {
    /* set a specific height, adjust as needed */
    max-width: 200px;
    height: auto;
    margin-top: 6px;
 }

 .agent-page {
  display: flex;
  flex-direction: column;
  align-items: center;
 }
}

@media (min-width: 820px) {
  .agent-card{
    width: 800px;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .agent-portait {
    width: 370px;  /* or whatever size you prefer */
    height: 500px;
    object-fit: cover; /* ensures the image covers the area without distortion */
    object-position: center; /* centers the image within the frame */
    border-radius: 30px;
    border: 3px solid rgb(67, 163, 200);
    margin-bottom: 10px
  }

  .agent-details {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ability-icon {
    width: 65px;  /* or whatever size you prefer */
    height: 65px;
    object-fit: cover; /* ensures the image covers the area without distortion */
    object-position: center; /* centers the image within the frame */
    border-radius: 30px;
    border: 3px solid rgb(168, 48, 48);
  }

  .ability-details {
    width: 670px;
    display: flex;
    flex-direction: column;
    
   }

   .description-card, .role-card{
    max-width: 700px;
    height: auto;
  }

  .agent-role, .role-description {
    /* set a specific height, adjust as needed */
    max-width: 700px;
    height: auto;
    margin-top: 6px;
 }

 .agent-page {
  display: flex;
  flex-direction: column;
  align-items: center;
 }

}

@media (min-width: 1180px) {
  .agent-card{
    width: 800px;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .agent-portait {
    width: 370px;  /* or whatever size you prefer */
    height: 500px;
    object-fit: cover; /* ensures the image covers the area without distortion */
    object-position: center; /* centers the image within the frame */
    border-radius: 30px;
    border: 3px solid rgb(67, 163, 200);
    margin-bottom: 10px
  }

  .agent-details {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ability-icon {
    width: 65px;  /* or whatever size you prefer */
    height: 65px;
    object-fit: cover; /* ensures the image covers the area without distortion */
    object-position: center; /* centers the image within the frame */
    border-radius: 30px;
    border: 3px solid rgb(168, 48, 48);
  }

  .ability-details {
    width: 670px;
    display: flex;
    flex-direction: column;
    
   }

   .description-card, .role-card{
    max-width: 700px;
    height: auto;
  }

  .agent-role, .role-description {
    /* set a specific height, adjust as needed */
    max-width: 700px;
    height: auto;
    margin-top: 6px;
 }

 .agent-page {
  display: flex;
  flex-direction: column;
  align-items: center;
 }

}
