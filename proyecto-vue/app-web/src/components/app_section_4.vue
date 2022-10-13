<template>
    <div class="footer">
        <div class="nav2">
            <ul>
                <li><a href="#homepage">HOME</a></li>
                <li><a href="#section-1">LOAD FILES</a></li>
                <li><a href="#section-2">ABOUT THE APP</a></li>
                <li><a href="#section-3">THE TEAM</a></li>
                <li><a href="#section-4">CONTACT</a></li>
            </ul>
        </div>

        <div class="container">
            <form action="action_page.php">

                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name..">

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name..">

                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

                <input type="submit" value="Submit">

            </form>
        </div>


    </div>

</template>

<script>

</script>

<style>
.footer {
    background-color: #1C658C;
    margin: 2%;
    display: flex;
}

.nav2 {
    display: flex;
    justify-content: space-around;
    width: 50%;
    align-items: center;
}

ul {
    list-style: none;
}

a {
    font-size: 10px;
    color: white;  
    text-decoration: none;   
}



/* Style inputs with type="text", select elements and textareas */
input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #D8D2CB;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #1C658C;
  padding: 10%;
  width: 50%;
}
</style>
