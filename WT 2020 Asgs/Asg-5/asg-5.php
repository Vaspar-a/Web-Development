<!DOCTYPE html>
<html>

<head>
	<title>Social Media Registration Form</title>
	<link href="https://fonts.googleapis.com/css?family=Sen&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="asg-5-styles.css">
    <script src="asg-5-adv-styles.js"></script>
</head>

<body>
	<fieldset>
		<legend>Sign Up</legend>
		<h1>Create your Account</h1>
		<div id="layout">
			<form action="asg-5-form-validation.php" method="post">
				<div class="field">
					<div class="input">
						<input type="" name="name" placeholder="name" autocomplete="off" pattern="^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$"  required>
						<label for="name">Name</label>
					</div>
				</div>
				<div class="field">
					<div class="input">
						<input type="" name="email" placeholder="email" autocomplete="off"
							pattern="[0-9a-z._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required>
						<label for="email">Email</label>
					</div>
				</div>	
				<div class="field">
					<div class="input">
						<input type="tel" name="telephone" placeholder="telephone" pattern="[789][0-9]{9}" autocomplete="off"  required>
						<label for="telephone">Mobile No.</label>
					</div>
				</div>
				<div class="field">
					<div class="input">
						<select id="select" name="profession" onblur="change_work_name()" required>
							<option hidden=""></option>
							<option>Student</option>
							<option>Faculty Member</option>
                            <option>Professional</option>
                            <option>Company Representative</option>
                            <option>Firm Representative</option>
						</select>
						<label for="gender">I'm a </label>
					</div>
                </div>
                <div class="field">
					<div class="input">
						<input type="" name="workname" placeholder="workname" autocomplete="off" required>
						<label for="workname" id="workname">Company/Firm Name</label>
					</div>
				</div>
				<div class="field">
					<div class="input">
						<button>Submit</button>
					</div>
				</div>
			</form>
		</div>
	</fieldset>
</body>

</html>